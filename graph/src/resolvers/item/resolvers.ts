import { In }                from 'typeorm';
import { Resolvers }         from '~/types/resolvers';
import { Item }              from '~/models/item';
import { Field }             from '~/models/field';
import { Event, EventType }  from '~/models/event';
import { Membership }        from '~/models/membership';
import { PaginationService } from '~/utils/paginationService';
import { isString } from 'lodash';

export const resolvers: Resolvers = {
  Item: {
    async fields (parent, { includes = [] }, { cache, session, accessor, workspaceId }) {
      const fieldRepository      = accessor.getRepository(Field);
      const eventRepository      = accessor.getRepository(Event);
      const membershipRepository = accessor.getRepository(Membership);

      const membership = await membershipRepository.findOne({
        where:     { user: { id: session?.user?.id }, workspace: { id: workspaceId } },
        relations: { workspace: true }
      });

      /**
       * @TODO (Maurice):
       * Return no result in case that we didn't get
       * an active membership/workspace */
       if (!membership?.workspace) {
        return [];
      }

      /**
       * Santity check for the includes array */
      const sanitizedIncludes: string[] = includes.filter(
        (item: unknown) => isString(item)
      );

      /**
       * We first get a list of all fields that
       * are defined in the workspace. */
      const fields = await fieldRepository.findBy({
        id: sanitizedIncludes.length > 0 ? In(sanitizedIncludes) : undefined,
        workspace: { id: workspaceId },
      });

      /**
       * @TODO (Maurice):
       * This should be run a a cachable function,
       * thus we can easily retrieve the result from redis,
       * instead of us having to recalculate each field value. */
      const fieldMap      = new Map<string, string>();
      const fieldPromises = fields.map(async field => {
        const value = cache.get(`itm-${parent.id}:fld-${field.id}`, async () => {
            /**
             * Retrieve the latest value from the events
             * corresponding to the field, this depends
             * on the role of the field. */
            const events = await eventRepository.findBy({
              item: { id: parent.id },
              //type: {  }
            });

            //return value;
          }
        )

        //fieldMap.set(field.id, value);
      });

      /**
       * Await all field results and read the results from the fieldMap */
      return Promise.all(fieldPromises).then(
        () => fields.map(field => ({
          field,
          value: fieldMap.get(field.id)
        })),
        _err => []
      );
    }
  },

  Query: {
    async item (_parent, { id }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const itemRepository       = accessor.getRepository(Item);
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

      return itemRepository.findOne({
        where: { id, workspace: { id: workspaceId } }
      });
    },

    async items (_parent, { input, ...props }, { session, accessor, workspaceId })
    {
      /**
       * @TODO (Maurice):
       * In case that there is no active user or no workspaceId
       * session we should just return an empty pagination. */
      const itemRepository       = accessor.getRepository(Item);
      const itemPagination       = new PaginationService(itemRepository);
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

      return itemPagination.get(props, {
        where: { workspace: { id: workspaceId } },
      });
    }
  },

  Mutation: {
    async createItem(_parent, { input }, { session, accessor, workspaceId })
    {
      if (!session?.user) {
        /**
         * User not logged in, we can return immediately. */
        return { error: 'NOT_AUTHORIZED' };
      }

      const itemRepository       = accessor.getRepository(Item);
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

      const item = itemRepository.create({
        ...input,
        workspace: membership.workspace
      } as Partial<Item>);

      const event = eventRepository.create({
        workspace: membership.workspace,
        item,
        user: session.user,
        data: input,
        type: EventType.ItemCreated
      } as Partial<Event>)

      const transaction = accessor.transaction(async manager => {
        const result = await manager.save(item);
        await manager.save(event);
        return result;
      });

      return transaction.then(
        result => ({ result }),
        _error => ({ error: "INTERNAL" })
      )
    }
  }
};
