import { Repository, ObjectLiteral, FindOptionsRelations, FindOptionsWhere, FindOptionsOrder } from 'typeorm';

type PaginationMapFn<T> = (item: T) => any;
type PaginationOptions<T> = {
  map?:       PaginationMapFn<T>;
  where:      FindOptionsWhere<T>;
  orderBy?:   FindOptionsOrder<T>;
  relations?: FindOptionsRelations<T>
};

export class PaginationService<T extends ObjectLiteral> {
  constructor(private repository: Repository<T>) {
    /**
     * Nothing to do here. */
  }

  async get(props: any, options: PaginationOptions<T>): Promise<any> {
    let skip = 0;
    const { after, before, limit = 1000 } = props;
    if (after || before) {
      /**
       * We have a forward facing cursor,
       * decode it and set a few params. */
      const [id, index] = after ?? before;
      //console.log(`[PaginationService] Fetching ${limit} items from ${index} with id ${id}`);
      skip = index;
    }

    const { map, orderBy, ...filter } = options;

    /**
     * Get connection entries from the database
     * and map the Ids correctly. */
    const queryOrder = orderBy ?? { createdAt: 'DESC' };
    const queryLimit = after || before ? limit + 2 : limit + 1;

    const results = await this.repository.find({
      ...filter,
      skip: skip,
      take: queryLimit,
      order: queryOrder as FindOptionsOrder<T>,
    });

    /**
     * In case that we have an before/after cursor,
     * We have to drop the first entry.
     *
     * In case that we have a next page
     * we'll have to drop the last entry. */
    const edges: any[] = after || before ? results.slice(1) : results;
    // if (results.length < queryLimit)
    // {
    //   edges = edges.slice(0, -1);
    // }

    return {
      edges: edges.map((p: any, i: number) => ({
        node:   map ? map(p) : p,
        cursor: [p.id, skip + i]
      })),
      pageInfo: {
        startCursor: [edges[0]?.id, skip],
        endCursor: edges.length > 0 ? [edges[edges.length - 1]?.id, skip + edges.length] : [0, 0],
        hasNextPage: results.length === queryLimit,
        hasPreviousPage: skip !== 0,
      },
    } as any;
  }
}
