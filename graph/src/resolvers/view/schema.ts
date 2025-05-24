import { gql } from 'graphql-tag';

export const schema = gql`
  type View implements Node {
    id: ID!

    name: String!
    type: ViewType!
    role: ViewRole!

    fields: [Field!]!
    filters: [Filter!]!

    createdAt: DateTime!
  }

  type ViewEdge {
    cursor: Cursor!
    node: View!
  }

  type ViewConnection {
    edges: [ViewEdge!]!
    nodes: [View!]!
    pageInfo: PageInfo!
  }


  enum ViewRole {
    ITEM
    EVENT
    MEMBER
  }

  enum ViewType {
    LIST
    BOARD
    TIMELINE
  }


  input ViewsInput {
    id: ID
    role: ViewRole
  }


  input CreateViewInput {
    name: String!
    role: ViewRole!
    type: ViewType!
    description: String

    fields: [ID!]
    filters: [FilterInput!]
  }

  enum CreateViewError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type CreateViewPayload {
    error: CreateViewError
    result: View
  }


  input UpdateViewInput {
    name: String
    fields: [ID!]
    filters: [FilterInput!]
  }

  enum UpdateViewError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type UpdateViewPayload {
    error: UpdateViewError
    result: View
  }


  type Query {
    view(id: ID!): View
    views(input: ViewsInput!, first: Int = 25, after: Cursor): ViewConnection!
  }

  type Mutation {
    createView(input: CreateViewInput!): CreateViewPayload
    updateView(input: UpdateViewInput!): UpdateViewPayload
  }
`;
