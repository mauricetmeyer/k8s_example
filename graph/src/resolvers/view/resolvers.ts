import { Event, EventType } from '~/models/event';
import { Membership } from '~/models/membership';
import { View } from '~/models/view';
import { Resolvers } from '~/types/resolvers';
import { PaginationService } from '~/utils/paginationService';

export const resolvers: Resolvers = {
  View: {

  },

  Query: {
    async view (_parent, { id }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const viewRepository       = accessor.getRepository(View);
      const membershipRepository = accessor.getRepository(Membership);

      const membership = await membershipRepository.findOne({
        where:     { user: { id: session?.user?.id }, workspace: { id: workspaceId } },
        relations: { workspace: true }
      });

      /**
       * @TODO (Maurice):
       * Return no result in case
       * that we didn't get an active membership/workspace */
       if (!membership?.workspace) {
        return null;
      }

      return viewRepository.findOne({
        where: { id, workspace: { id: workspaceId } }
      });
    },

    async views (_parent, { input, ...props }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const viewRepository       = accessor.getRepository(View);
      const viewPagination       = new PaginationService(viewRepository);
      const membershipRepository = accessor.getRepository(Membership);

      /**
       * @TODO (Maurice):
       * Get membership and workspace information,
       * this will be used for additional role based
       * filtering. */
      const membership = await membershipRepository.findOne({
        where:     { user: { id: session?.user?.id }, workspace: { id: workspaceId } },
        relations: { workspace: true }
      });

      /**
       * @TODO (Maurice):
       * Return an empty pagination in case
       * that we didn't get an active membership/workspace */
      if (!membership?.workspace) {
        return {}
      }

      return viewPagination.get(props, {
        where: {
          role:      input.role,
          workspace: { id: workspaceId }
        },
      }); 
    }
  },

  Mutation: {
    async createView(_parent, { input }, { session, accessor, workspaceId })
    {
      if (!session?.user) {
        /**
         * User not logged in, we can return immediately. */
        return { error: 'NOT_AUTHORIZED' };
      }

      const viewRepository       = accessor.getRepository(View);
      const eventRepository      = accessor.getRepository(Event);
      const membershipRepository = accessor.getRepository(Membership);

      /**
       * @TODO (Maurice):
       * Get membership and workspace information,
       * this will be used for additional role based
       * filtering. */
      const membership = await membershipRepository.findOne({
        where:     { user: { id: session?.user?.id }, workspace: { id: workspaceId } },
        relations: { workspace: true }
      });

      /**
       * @TODO (Maurice):
       * Return an empty pagination in case
       * that we didn't get an active membership/workspace */
      if (!membership?.workspace) {
        return {}
      }

      const view = viewRepository.create({
        ...input,
        workspace: membership.workspace
      } as Partial<View>);

      const event = eventRepository.create({
        workspace: membership.workspace,
        user: session.user,
        data: { ...input, viewId: view.id },
        type: EventType.ViewCreated
      } as Partial<Event>);

      const transaction = accessor.transaction(async manager => {
        const result = await manager.save(view);
        await manager.save(event);
        return result;
      });

      return transaction.then(
        result => ({ result }),
        _error => ({ error: "INTERNAL" })
      )
    },

    async updateView(_parent, { input }, { session, accessor, workspaceId })
    {
      if (!session?.user) {
        /**
         * User not logged in, we can return immediately. */
        return { error: 'NOT_AUTHORIZED' };
      }

      const viewRepository       = accessor.getRepository(View);
      const eventRepository      = accessor.getRepository(Event);
      const membershipRepository = accessor.getRepository(Membership);
    }
  }
};
