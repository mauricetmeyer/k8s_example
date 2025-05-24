import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  DateTime: any;
};

export type CreateFieldError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type CreateFieldInput = {
  format?: InputMaybe<FieldFormat>;
  name: Scalars['String'];
  path?: InputMaybe<Scalars['String']>;
  role: FieldRole;
};

export type CreateFieldPayload = {
  error?: Maybe<CreateFieldError>;
  result?: Maybe<Field>;
};

export type CreateItemError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type CreateItemInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateItemPayload = {
  error?: Maybe<CreateItemError>;
  result?: Maybe<Item>;
};

export type CreateViewError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type CreateViewInput = {
  description?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['ID']>>;
  filters?: InputMaybe<Array<FilterInput>>;
  name: Scalars['String'];
  role: ViewRole;
  type: ViewType;
};

export type CreateViewPayload = {
  error?: Maybe<CreateViewError>;
  result?: Maybe<View>;
};

export type CreateWorkspaceError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type CreateWorkspaceInput = {
  name: Scalars['String'];
  role: WorkspaceRole;
  usage: Array<Scalars['String']>;
};

export type CreateWorkspacePayload = {
  error?: Maybe<CreateWorkspaceError>;
  result?: Maybe<Workspace>;
};

export type Event = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  item?: Maybe<Item>;
  type: Scalars['String'];
  user?: Maybe<User>;
};

export type EventConnection = {
  edges: Array<EventEdge>;
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type EventEdge = {
  cursor: Scalars['Cursor'];
  node: Event;
};

export type EventsError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type EventsInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type EventsPayload = {
  error?: Maybe<EventsError>;
  result?: Maybe<Event>;
};

export type Field = Node & {
  createdAt: Scalars['DateTime'];
  events: EventConnection;
  format?: Maybe<FieldFormat>;
  id: Scalars['ID'];
  name: Scalars['String'];
  path: Scalars['String'];
  role: FieldRole;
  workspace: Workspace;
};

export type FieldConnection = {
  edges: Array<FieldEdge>;
  nodes: Array<Field>;
  pageInfo: PageInfo;
};

export type FieldEdge = {
  cursor: Scalars['Cursor'];
  node: Field;
};

export type FieldFormat =
  | 'CURRENCY'
  | 'PERCENTAGE'
  | 'TEMPERATURE';

export type FieldRole =
  | 'DATE'
  | 'HISTORIC'
  | 'LABELS'
  | 'NUMBER'
  | 'SELECT'
  | 'TEXT'
  | 'USER';

export type FieldsInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Filter = {
  and?: Maybe<Array<Filter>>;
  fields?: Maybe<Array<FilterField>>;
  or?: Maybe<Array<Filter>>;
};

export type FilterField = {
  id: Scalars['ID'];
  operator: FilterOperator;
  values?: Maybe<Array<Scalars['String']>>;
};

export type FilterFieldInput = {
  id: Scalars['ID'];
  operator: FilterOperator;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type FilterInput = {
  and?: InputMaybe<Array<FilterInput>>;
  fields?: InputMaybe<Array<FilterFieldInput>>;
  or?: InputMaybe<Array<FilterInput>>;
};

export type FilterOperator =
  | 'AND'
  | 'ANY'
  | 'GT'
  | 'GTE'
  | 'LT'
  | 'LTE'
  | 'NOT';

export type Item = Node & {
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  events: EventConnection;
  fields: Array<ItemField>;
  id: Scalars['ID'];
  name: Scalars['String'];
  workspace: Workspace;
};


export type ItemFieldsArgs = {
  includes?: InputMaybe<Array<Scalars['ID']>>;
};

export type ItemConnection = {
  edges: Array<ItemEdge>;
  nodes: Array<Item>;
  pageInfo: PageInfo;
};

export type ItemEdge = {
  cursor: Scalars['Cursor'];
  node: Item;
};

export type ItemField = {
  field: Field;
  value?: Maybe<Scalars['String']>;
};

export type ItemsError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type ItemsInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ItemsPayload = {
  error?: Maybe<ItemsError>;
  result?: Maybe<Item>;
};

export type LoginError =
  | 'INTERNAL'
  | 'INVALID_CREDENTIALS';

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  error?: Maybe<LoginError>;
  result?: Maybe<Scalars['String']>;
};

export type Membership = Node & {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  role: MembershipRole;
  user: User;
  workspace: Workspace;
};

export type MembershipConnection = {
  edges: Array<MembershipEdge>;
  nodes: Array<Membership>;
  pageInfo: PageInfo;
};

export type MembershipEdge = {
  cursor: Scalars['Cursor'];
  node: Membership;
};

export type MembershipRole =
  /** A user that has access to developer features */
  | 'DEVELOPER'
  /** A guest user */
  | 'GUEST'
  /** A user with manager privileges */
  | 'MANAGER'
  /** Like manager... just a bit more special */
  | 'OWNER'
  /** A user with no special role */
  | 'REGULAR';

export type Mutation = {
  createField?: Maybe<CreateFieldPayload>;
  createItem?: Maybe<CreateItemPayload>;
  createView?: Maybe<CreateViewPayload>;
  createWorkspace: CreateWorkspacePayload;
  login: LoginPayload;
  register: RegisterPayload;
  updateView?: Maybe<UpdateViewPayload>;
};


export type MutationCreateFieldArgs = {
  input: CreateFieldInput;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateViewArgs = {
  input: CreateViewInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdateViewArgs = {
  input: UpdateViewInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Query = {
  event?: Maybe<Event>;
  events: EventConnection;
  field?: Maybe<Field>;
  fields: FieldConnection;
  item?: Maybe<Item>;
  items: ItemConnection;
  /**
   * The currently authenticated user.
   * Returns null if the user is not authenticated.
   */
  me?: Maybe<User>;
  search?: Maybe<SearchPayload>;
  view?: Maybe<View>;
  views: ViewConnection;
  workspace?: Maybe<Workspace>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  input: EventsInput;
};


export type QueryFieldArgs = {
  id: Scalars['ID'];
};


export type QueryFieldsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  input: FieldsInput;
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  input: ItemsInput;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QueryViewArgs = {
  id: Scalars['ID'];
};


export type QueryViewsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  input: ViewsInput;
};

export type RegisterError =
  | 'EXISTING'
  | 'INTERNAL'
  | 'PASSWORD_TOO_LONG'
  | 'PASSWORD_TOO_SHORT';

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterPayload = {
  error?: Maybe<RegisterError>;
  result?: Maybe<Scalars['String']>;
};

export type Search = {
  id: Scalars['ID'];
};

export type SearchError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type SearchInput = {
  query: Scalars['String'];
};

export type SearchPayload = {
  error?: Maybe<SearchError>;
  result?: Maybe<Search>;
};

export type TimeRange = {
  end: Scalars['Int'];
  start: Scalars['Int'];
};

export type UpdateViewError =
  | 'INTERNAL'
  | 'INVALID_DATA'
  | 'LIMIT_REACHED'
  | 'NOT_AUTHORIZED';

export type UpdateViewInput = {
  fields?: InputMaybe<Array<Scalars['ID']>>;
  filters?: InputMaybe<Array<FilterInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateViewPayload = {
  error?: Maybe<UpdateViewError>;
  result?: Maybe<View>;
};

export type User = Node & {
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  workspaces: WorkspaceConnection;
};

export type UserConnection = {
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  cursor: Scalars['Cursor'];
  node: User;
};

export type UserSettings = {
  user: User;
};

export type View = Node & {
  createdAt: Scalars['DateTime'];
  fields: Array<Field>;
  filters: Array<Filter>;
  id: Scalars['ID'];
  name: Scalars['String'];
  role: ViewRole;
  type: ViewType;
};

export type ViewConnection = {
  edges: Array<ViewEdge>;
  nodes: Array<View>;
  pageInfo: PageInfo;
};

export type ViewEdge = {
  cursor: Scalars['Cursor'];
  node: View;
};

export type ViewRole =
  | 'EVENT'
  | 'ITEM'
  | 'MEMBER';

export type ViewType =
  | 'BOARD'
  | 'LIST'
  | 'TIMELINE';

export type ViewsInput = {
  id?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<ViewRole>;
};

export type Workspace = Node & {
  createdAt: Scalars['DateTime'];
  fields: FieldConnection;
  id: Scalars['ID'];
  memberships: MembershipConnection;
  name: Scalars['String'];
  role: WorkspaceRole;
  users: UserConnection;
  views: ViewConnection;
};

export type WorkspaceConnection = {
  edges: Array<WorkspaceEdge>;
  nodes: Array<Workspace>;
  pageInfo: PageInfo;
};

export type WorkspaceEdge = {
  cursor: Scalars['Cursor'];
  node: Workspace;
};

export type WorkspaceRole =
  /** Organization that publishes extensions */
  | 'DEVELOPER'
  /** Organization that uses Leaflytics */
  | 'REGULAR';

export type CreateItemMutationVariables = Exact<{
  input: CreateItemInput;
}>;


export type CreateItemMutation = { createItem?: Maybe<(
    Pick<CreateItemPayload, 'error'>
    & { result?: Maybe<Pick<Item, 'id'>> }
  )> };

export type CreateViewMutationVariables = Exact<{
  input: CreateViewInput;
}>;


export type CreateViewMutation = { createView?: Maybe<(
    Pick<CreateViewPayload, 'error'>
    & { result?: Maybe<Pick<View, 'id'>> }
  )> };

export type CreateWorkspaceMutationVariables = Exact<{
  input: CreateWorkspaceInput;
}>;


export type CreateWorkspaceMutation = { createWorkspace: (
    Pick<CreateWorkspacePayload, 'error'>
    & { result?: Maybe<Pick<Workspace, 'id'>> }
  ) };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { login: Pick<LoginPayload, 'result' | 'error'> };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { register: Pick<RegisterPayload, 'result' | 'error'> };

export type EventsQueryVariables = Exact<{
  input: EventsInput;
}>;


export type EventsQuery = { events: { edges: Array<(
      Pick<EventEdge, 'cursor'>
      & { node: (
        Pick<Event, 'id' | 'type' | 'createdAt'>
        & { user?: Maybe<Pick<User, 'id' | 'name' | 'email'>>, item?: Maybe<Pick<Item, 'id' | 'name'>> }
      ) }
    )>, pageInfo: Pick<PageInfo, 'hasNextPage'> } };

export type ItemsQueryVariables = Exact<{
  input: ItemsInput;
  includes?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type ItemsQuery = { items: { edges: Array<(
      Pick<ItemEdge, 'cursor'>
      & { node: (
        Pick<Item, 'id' | 'name' | 'createdAt'>
        & { fields: Array<(
          Pick<ItemField, 'value'>
          & { field: Pick<Field, 'id' | 'name' | 'role' | 'format'> }
        )> }
      ) }
    )>, pageInfo: Pick<PageInfo, 'hasNextPage'> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<(
    Pick<User, 'id' | 'name' | 'email' | 'createdAt'>
    & { workspaces: { edges: Array<(
        Pick<WorkspaceEdge, 'cursor'>
        & { node: Pick<Workspace, 'id' | 'name'> }
      )> } }
  )> };

export type MembersQueryVariables = Exact<{ [key: string]: never; }>;


export type MembersQuery = { workspace?: Maybe<{ memberships: { edges: Array<(
        Pick<MembershipEdge, 'cursor'>
        & { node: (
          Pick<Membership, 'id' | 'role' | 'createdAt'>
          & { user: Pick<User, 'id' | 'name' | 'email'> }
        ) }
      )> } }> };

export type ViewsQueryVariables = Exact<{
  input: ViewsInput;
}>;


export type ViewsQuery = { views: { edges: Array<(
      Pick<ViewEdge, 'cursor'>
      & { node: (
        Pick<View, 'id' | 'name' | 'role' | 'type' | 'createdAt'>
        & { fields: Array<Pick<Field, 'id' | 'name' | 'role' | 'format'>>, filters: Array<{ or?: Maybe<Array<{ fields?: Maybe<Array<Pick<FilterField, 'id' | 'values' | 'operator'>>> }>>, and?: Maybe<Array<{ fields?: Maybe<Array<Pick<FilterField, 'id' | 'values' | 'operator'>>> }>>, fields?: Maybe<Array<Pick<FilterField, 'id' | 'values' | 'operator'>>> }> }
      ) }
    )>, pageInfo: Pick<PageInfo, 'hasNextPage'> } };


export const CreateItemDocument = gql`
    mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    error
    result {
      id
    }
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const CreateViewDocument = gql`
    mutation CreateView($input: CreateViewInput!) {
  createView(input: $input) {
    error
    result {
      id
    }
  }
}
    `;
export type CreateViewMutationFn = Apollo.MutationFunction<CreateViewMutation, CreateViewMutationVariables>;

/**
 * __useCreateViewMutation__
 *
 * To run a mutation, you first call `useCreateViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createViewMutation, { data, loading, error }] = useCreateViewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateViewMutation(baseOptions?: Apollo.MutationHookOptions<CreateViewMutation, CreateViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateViewMutation, CreateViewMutationVariables>(CreateViewDocument, options);
      }
export type CreateViewMutationHookResult = ReturnType<typeof useCreateViewMutation>;
export type CreateViewMutationResult = Apollo.MutationResult<CreateViewMutation>;
export type CreateViewMutationOptions = Apollo.BaseMutationOptions<CreateViewMutation, CreateViewMutationVariables>;
export const CreateWorkspaceDocument = gql`
    mutation CreateWorkspace($input: CreateWorkspaceInput!) {
  createWorkspace(input: $input) {
    error
    result {
      id
    }
  }
}
    `;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    result
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    result
    error
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const EventsDocument = gql`
    query Events($input: EventsInput!) {
  events(input: $input) {
    edges {
      cursor
      node {
        id
        type
        user {
          id
          name
          email
        }
        item {
          id
          name
        }
        createdAt
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEventsQuery(baseOptions: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const ItemsDocument = gql`
    query Items($input: ItemsInput!, $includes: [ID!]) {
  items(input: $input) {
    edges {
      cursor
      node {
        id
        name
        createdAt
        fields(includes: $includes) {
          value
          field {
            id
            name
            role
            format
          }
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `;

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *      input: // value for 'input'
 *      includes: // value for 'includes'
 *   },
 * });
 */
export function useItemsQuery(baseOptions: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
      }
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    email
    createdAt
    workspaces {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MembersDocument = gql`
    query Members {
  workspace {
    memberships {
      edges {
        cursor
        node {
          id
          role
          user {
            id
            name
            email
          }
          createdAt
        }
      }
    }
  }
}
    `;

/**
 * __useMembersQuery__
 *
 * To run a query within a React component, call `useMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMembersQuery(baseOptions?: Apollo.QueryHookOptions<MembersQuery, MembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
      }
export function useMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MembersQuery, MembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
        }
export type MembersQueryHookResult = ReturnType<typeof useMembersQuery>;
export type MembersLazyQueryHookResult = ReturnType<typeof useMembersLazyQuery>;
export type MembersQueryResult = Apollo.QueryResult<MembersQuery, MembersQueryVariables>;
export const ViewsDocument = gql`
    query Views($input: ViewsInput!) {
  views(input: $input) {
    edges {
      cursor
      node {
        id
        name
        role
        type
        createdAt
        fields {
          id
          name
          role
          format
        }
        filters {
          or {
            fields {
              id
              values
              operator
            }
          }
          and {
            fields {
              id
              values
              operator
            }
          }
          fields {
            id
            values
            operator
          }
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `;

/**
 * __useViewsQuery__
 *
 * To run a query within a React component, call `useViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useViewsQuery(baseOptions: Apollo.QueryHookOptions<ViewsQuery, ViewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewsQuery, ViewsQueryVariables>(ViewsDocument, options);
      }
export function useViewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewsQuery, ViewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewsQuery, ViewsQueryVariables>(ViewsDocument, options);
        }
export type ViewsQueryHookResult = ReturnType<typeof useViewsQuery>;
export type ViewsLazyQueryHookResult = ReturnType<typeof useViewsLazyQuery>;
export type ViewsQueryResult = Apollo.QueryResult<ViewsQuery, ViewsQueryVariables>;