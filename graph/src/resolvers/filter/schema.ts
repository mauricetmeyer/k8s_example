import { gql } from 'graphql-tag';

export const schema = gql`
  enum FilterOperator {
    AND
    ANY
    NOT
    GT
    GTE
    LT
    LTE
  }

  input FilterFieldInput {
    id: ID!
    values: [String!]
    operator: FilterOperator!
  }

  input FilterInput {
    or: [FilterInput!]
    and: [FilterInput!]

    fields: [FilterFieldInput!]
  }


  type FilterField {
    id: ID!
    values: [String!]
    operator: FilterOperator!
  }

  type Filter {
    or: [Filter!]
    and: [Filter!]

    fields: [FilterField!]
  }
`;
