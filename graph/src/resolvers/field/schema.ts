import { gql } from 'graphql-tag';

export const schema = gql`
  type Field implements Node {
    id: ID!

    name: String!

    path: String!

    role: FieldRole!

    format: FieldFormat

    events: EventConnection!

    workspace: Workspace!

    createdAt: DateTime!
  }

  type FieldEdge {
    cursor: Cursor!
    node: Field!
  }

  type FieldConnection {
    edges: [FieldEdge!]!
    nodes: [Field!]!
    pageInfo: PageInfo!
  }


  enum FieldRole {
    USER
    TEXT
    DATE
    NUMBER
    SELECT
    LABELS
    HISTORIC
  }

  enum FieldFormat {
    CURRENCY
    PERCENTAGE
    TEMPERATURE
  }


  input FieldsInput {
    id: ID
  }


  input CreateFieldInput {
    name: String!
    path: String
    role: FieldRole!
    format: FieldFormat
  }

  enum CreateFieldError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type CreateFieldPayload {
    error: CreateFieldError
    result: Field
  }


  type Query {
    field(id: ID!): Field
    fields(input: FieldsInput!, first: Int = 25, after: Cursor): FieldConnection!
  }

  type Mutation {
    createField(input: CreateFieldInput!): CreateFieldPayload
  }
`;
