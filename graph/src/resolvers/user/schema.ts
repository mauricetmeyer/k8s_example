import { gql } from 'graphql-tag';

export const schema = gql`
  type User implements Node {
    id: ID!

    name: String!

    email: String!

    workspaces: WorkspaceConnection!

    createdAt: DateTime!
  }

  type UserEdge {
    cursor: Cursor!
    node: User!
  }

  type UserConnection {
    edges: [UserEdge!]!
    nodes: [User!]!
    pageInfo: PageInfo!
  }

  type Query {
    """
    The currently authenticated user.
    Returns null if the user is not authenticated.
    """
    me: User
  }
`;
