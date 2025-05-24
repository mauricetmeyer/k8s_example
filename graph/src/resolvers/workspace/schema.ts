import { gql } from 'graphql-tag';

export const schema = gql`
  type Workspace implements Node {
    id: ID!

    name: String!

    role: WorkspaceRole!

    users: UserConnection!

    views: ViewConnection!

    fields: FieldConnection!

    memberships: MembershipConnection!

    createdAt: DateTime!
  }

  type WorkspaceEdge {
    cursor: Cursor!
    node: Workspace!
  }

  type WorkspaceConnection {
    edges: [WorkspaceEdge!]!
    nodes: [Workspace!]!
    pageInfo: PageInfo!
  }


  enum WorkspaceRole {
    """
    Organization that uses Leaflytics
    """
    REGULAR

    """
    Organization that publishes extensions
    """
    DEVELOPER
  }


  input CreateWorkspaceInput {
    name:  String!
    role:  WorkspaceRole!
    usage: [String!]!
  }

  enum CreateWorkspaceError {
    INVALID_DATA
    NOT_AUTHORIZED
    LIMIT_REACHED
    INTERNAL
  }

  type CreateWorkspacePayload {
    error:  CreateWorkspaceError
    result: Workspace
  }

  type Query {
    workspace: Workspace
  }

  type Mutation {
    createWorkspace(input: CreateWorkspaceInput!): CreateWorkspacePayload!
  }
`;
