import { gql } from 'graphql-tag';

export const schema = gql`
  type Event implements Node {
    id: ID!

    type: String!

    item: Item

    user: User

    createdAt: DateTime!
  }

  type EventEdge {
    cursor: Cursor!
    node: Event!
  }

  type EventConnection {
    edges: [EventEdge!]!
    nodes: [Event!]!
    pageInfo: PageInfo!
  }


  input EventsInput {
    id: ID
  }

  enum EventsError {
    INVALID_DATA
    NOT_AUTHORIZED
    INTERNAL
    LIMIT_REACHED
  }

  type EventsPayload {
    error: EventsError
    result: Event
  }

  type Query {
    event(id: ID!): Event
    events(input: EventsInput!, first: Int = 25, after: Cursor): EventConnection!
  }
`;
