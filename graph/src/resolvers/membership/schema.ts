import { gql } from 'graphql-tag';

export const schema = gql`
  type Membership implements Node {
    id: ID!

    role: MembershipRole!
    user: User!
    workspace: Workspace!

    createdAt: DateTime!
  }

  type MembershipEdge {
    cursor: Cursor!
    node: Membership!
  }

  type MembershipConnection {
    edges: [MembershipEdge!]!
    nodes: [Membership!]!
    pageInfo: PageInfo!
  }


  enum MembershipRole {
    """
    A guest user
    """
    GUEST

    """
    A user with no special role
    """
    REGULAR
 
    """
    A user with manager privileges
    """
    MANAGER

    """
    A user that has access to developer features
    """
    DEVELOPER

    """
    Like manager... just a bit more special
    """
    OWNER
  }
`;
