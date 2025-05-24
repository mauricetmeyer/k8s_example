import { Resolvers }         from '~/types/resolvers';
import { View }              from '~/models/view';
import { Field }             from '~/models/field';
import { Membership, MembershipRole }        from '~/models/membership';
import { PaginationService } from '~/utils/paginationService';
import { Workspace }         from '~/models/workspace';
import { Event, EventType }  from '~/models/event';

export const resolvers: Resolvers = {
  Workspace: {
    users (parent, props, { accessor }) {
      const membershipRepository = accessor.getRepository(Membership);
      const membershipPagination = new PaginationService(membershipRepository);

      return membershipPagination.get(props, {
        map: item => item.user,
        where: { workspace: { id: parent.id } },
        relations: { user: true },
      });
    },

    views (parent, props, { accessor }) {
      const viewRepository = accessor.getRepository(View);
      const viewPagination = new PaginationService(viewRepository);

      return viewPagination.get(props, {
        where: { workspace: { id: parent.id } }
      });
    },

    fields (parent, props, { accessor }) {
      const fieldRepository = accessor.getRepository(Field);
      const fieldPagination = new PaginationService(fieldRepository);

      return fieldPagination.get(props, {
        where: { workspace: { id: parent.id } }
      });
    },

    memberships (parent, props, { accessor }) {
      const membershipRepository = accessor.getRepository(Membership);
      const membershipPagination = new PaginationService(membershipRepository);

      return membershipPagination.get(props, {
        where: { workspace: { id: parent.id } }
      });
    }
  },
  Query: {
    async workspace (_parent, _props, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const membershipRepository = accessor.getRepository(Membership);
      const membership = await membershipRepository.findOne({
        where:     { user: { id: session?.user?.id }, workspace: { id: workspaceId } },
        relations: { workspace: true }
      });

      return membership?.workspace;
    }
  },
  Mutation: {
    async createWorkspace(_parent, { input }, { session, accessor }) {
      if (!session?.user) {
        return { error: 'NOT_AUTHORIZED' };
      }

      const eventRepository      = accessor.getRepository(Event);
      const workspaceRepository  = accessor.getRepository(Workspace);
      const membershipRepository = accessor.getRepository(Membership);
      
      const workspace  = workspaceRepository.create(input as Partial<Workspace>);
      const membership = membershipRepository.create({
        workspace,
        user: session.user,
        role: MembershipRole.Owner
      } as Partial<Membership>);

      const workspaceEvent = eventRepository.create({
        workspace,
        type: EventType.WorkspaceCreated,
        user: session.user,
      })

      const membershipEvent = eventRepository.create({
        workspace,
        type: EventType.MemberAdded,
        user: session.user,
        data: {
          role: MembershipRole.Owner,
          userId: session.user.id
        }
      })

      /**
       * Try inserting workspace and membership
       * inside transaction. */
      const transaction = accessor.transaction(async manager => {
        const result = await manager.save(workspace);
        await manager.save(membership);
        await manager.save(workspaceEvent);
        await manager.save(membershipEvent);
        return result;
      });

      /**
       * Return the created workspace */
      return transaction.then(
        result => ({ result }),
        _error => {
          console.error(_error);
          return { error: 'INTERNAL' };
        }
      );
    }
  },
};
