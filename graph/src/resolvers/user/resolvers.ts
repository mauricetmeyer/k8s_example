import { Resolvers }         from '~/types/resolvers';
import { Membership }        from '~/models/membership';
import { PaginationService } from '~/utils/paginationService';

export const resolvers: Resolvers = {
  User: {
    workspaces (_parent, props, { session, accessor }) {
      if (!session?.user) {
        /**
         * @TODO (Maurice):
         * In case that we don't have a valid user session,
         * make sure that we return an empty pagination. */
        return {};
      }

      const membershipRepository = accessor.getRepository(Membership);
      const membershipPagination = new PaginationService(membershipRepository);

      return membershipPagination.get(props, {
        map: item => item.workspace,
        where: { user: { id: session.user.id } },
        relations: { workspace: true },
      });
    }
  },

  Query: {
    me: (_parent, _props, { session }) => session?.user,
  },
};
