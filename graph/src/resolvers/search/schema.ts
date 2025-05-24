import { gql } from 'graphql-tag';

export const schema = gql`
  type Search {
    id: ID!
  }

  input SearchInput {
    query: String!
  }

  enum SearchError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type SearchPayload {
    error: SearchError
    result: Search
  }

  type Query {
    search(input: SearchInput!): SearchPayload
  }
`;
