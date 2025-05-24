import { Resolvers } from '~/types/resolvers';
import { Field }             from '~/models/field';
import { Membership }        from '~/models/membership';
import { PaginationService } from '~/utils/paginationService';

export const resolvers: Resolvers = {
  Field: {

  },

  Query: {
    async field (_parent, { id }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const fieldRepository      = accessor.getRepository(Field);
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

      return fieldRepository.findOne({
        where: { id, workspace: { id: workspaceId } }
      });
    },

    async fields (_parent, { input, ...props }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const fieldRepository      = accessor.getRepository(Field);
      const fieldPagination      = new PaginationService(fieldRepository);
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

      return fieldPagination.get(props, {
        where: { workspace: { id: workspaceId } },
      });      
    }
  },

  Mutation: {
    async createField(_parent, { input }, { session, accessor, workspaceId })
    {
      if (!session?.user) {
        /**
         * User not logged in, we can return immediately. */
        return { error: 'NOT_AUTHORIZED' };
      }

      const fieldRepository      = accessor.getRepository(Field);
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

      const field = fieldRepository.create({ ...input, workspace: membership.workspace });
      return fieldRepository.save(field).then(
        result => ({ result }),
        _error => {
          console.error(_error);
          return ({ error: 'INTERNAL' });
        }
      );
    }
  }
};
