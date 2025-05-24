import { Event } from '~/models/event';
import { Item } from '~/models/item';
import { Membership } from '~/models/membership';
import { User } from '~/models/user';
import { Resolvers } from '~/types/resolvers';
import { PaginationService } from '~/utils/paginationService';

export const resolvers: Resolvers = {
  Event: {
    user (parent, _props, { accessor }) {
      if (!parent?.userId) return null;
      const userRepository = accessor.getRepository(User);
      return userRepository.findOneBy({ id: parent?.userId });
    },

    item (parent, _props, { accessor }) {
      if (!parent?.itemId) return null;
      const itemRepository = accessor.getRepository(Item);
      return itemRepository.findOneBy({ id: parent?.itemId });
    }
  },

  Query: {
    async event (_parent, { id }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const eventRepository      = accessor.getRepository(Event);
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

      return eventRepository.findOne({
        where: { id, workspace: { id: workspaceId } }
      });
    },

    async events (_parent, { input, ...props }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const eventRepository      = accessor.getRepository(Event);
      const eventPagination      = new PaginationService(eventRepository);
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

      return eventPagination.get(props, {
        where: { workspace: { id: workspaceId } },
      });
    }
  }
};
