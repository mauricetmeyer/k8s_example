import { Resolvers } from '~/types/resolvers';
import { User }      from '~/models/user';
import { Workspace } from '~/models/workspace';

export const resolvers: Resolvers = {
  Membership: {
    user (parent, _props, { accessor }) {
      const userRepository = accessor.getRepository(User);
      return parent.user ?? userRepository.findOneBy({
        id: parent.userId
      });
    },

    workspace (parent, _props, { accessor }) {
      const workspaceRepository = accessor.getRepository(Workspace);

      return parent.workspace ?? workspaceRepository.findOneBy({
        id: parent.workspaceId
      });
    }
  },

  Query: {}
};
