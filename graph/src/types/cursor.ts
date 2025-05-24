import { Scalars, Sort } from '~/resolvers/types';

export interface CursorList<T> {
  items: T[];
  count: number;
  hasNextPage: boolean;
}

export interface CursorProps<T> {
  limit: number;
  after?: Scalars['Cursor'];
  sort?: Sort[];
}
