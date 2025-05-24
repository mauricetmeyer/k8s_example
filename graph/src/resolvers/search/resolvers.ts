import { Resolvers } from '~/types/resolvers';

export const resolvers: Resolvers = {
  Query: {
    search: async (_parent, { query }, { session, accessor }) => {
      if (!session?.user) {
        /**
         * User not logged in, we can return immediately. */
        return { error: 'NOT_AUTHORIZED' };
      }

      
    }
  }
};
