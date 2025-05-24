import { ApolloServer }                            from '@apollo/server';
import { Log, Cache, Accessor, Request, Response } from '@leaflytics/shared';
import { User }                                    from '~/models/user';
import { Session }                                 from '~/models/session';
import { Membership }                              from '~/models/membership';

export type ServerContext = {
  log:      Log;
  cache:    Cache;
  apollo:   ApolloServer;
  accessor: Accessor;
}

export type Context = {
  request:  Request;
  response: Response;

  token?:   string;
 
  log:      Log;
  cache:    Cache;
  apollo:   ApolloServer;
  accessor: Accessor;

  session?:     Session;
  workspaceId?: string;
}
