import { gql } from 'graphql-tag';

export const schema = gql`
  """
  An opaque identifier for a connection edge. Used for pagination.

  This is part of the Relay Cursor Connections Specification:
  https://facebook.github.io/relay/graphql/connections.htm.
  """
  scalar Cursor

  """
  RFC3339 timestamp.
  For example "2015-07-22T21:41:14Z".
  """
  scalar DateTime

  type TimeRange {
    start: Int!
    end: Int!
  }

  type PageInfo {
    totalCount: Int
    endCursor: Cursor
    startCursor: Cursor
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
  }

  interface Node {
    id: ID!
  }
`;
