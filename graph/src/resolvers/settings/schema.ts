import { gql } from 'graphql-tag';

export const schema = gql`
  type UserSettings {
    user: User!
  }
`;
