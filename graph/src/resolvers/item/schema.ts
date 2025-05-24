import { gql } from 'graphql-tag';

export const schema = gql`
  type Item implements Node {
    id: ID!

    name: String!
    description: String

    events: EventConnection!

    fields(includes: [ID!]): [ItemField!]!

    workspace: Workspace!

    createdAt: DateTime!
  }

  type ItemEdge {
    cursor: Cursor!
    node: Item!
  }

  type ItemConnection {
    edges: [ItemEdge!]!
    nodes: [Item!]!
    pageInfo: PageInfo!
  }

  type ItemField {
    field: Field!
    value: String
  }


  input ItemsInput {
    id: ID
  }

  enum ItemsError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type ItemsPayload {
    error: ItemsError
    result: Item
  }


  input CreateItemInput {
    name: String!
    description: String
  }

  enum CreateItemError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type CreateItemPayload {
    error: CreateItemError
    result: Item
  }


  type Query {
    item(id: ID!): Item
    items(input: ItemsInput!, first: Int = 25, after: Cursor): ItemConnection!
  }

  type Mutation {
    createItem(input: CreateItemInput!): CreateItemPayload
  }
`;
