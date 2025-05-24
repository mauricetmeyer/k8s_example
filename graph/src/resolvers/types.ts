export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AcceptRequestError = 'INTERNAL' | 'NOT_FOUND';

export type AcceptRequestPayload = {
  __typename?: 'AcceptRequestPayload';
  error?: Maybe<AcceptRequestError>;
  result?: Maybe<Request>;
};

export type Config = {
  __typename?: 'Config';
  clientVersion: Scalars['String'];
};

export type CreateIntroductionError = 'INVALID_DATA';

export type CreateIntroductionInput = {
  criteria?: InputMaybe<Scalars['String']>;
  introducerId: Scalars['ID'];
  message: Scalars['String'];
  profileIds: Array<Scalars['ID']>;
  sellerId: Scalars['ID'];
  calendarUrl: Scalars['String'];
};

export type CreateIntroductionPayload = {
  __typename?: 'CreateIntroductionPayload';
  error?: Maybe<CreateIntroductionError>;
  result?: Maybe<Introduction>;
};

export type CreateProfileError = 'INVALID_DATA';

export type CreateProfileInput = {
  company?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  greeting: Scalars['String'];
  lastName: Scalars['String'];
  pictureUrl?: InputMaybe<Scalars['String']>;
  profileUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateProfilePayload = {
  __typename?: 'CreateProfilePayload';
  error?: Maybe<CreateProfileError>;
  result?: Maybe<Profile>;
};

export type DeleteUserInput = {
  /**  Id of the user  */
  id: Scalars['ID'];
};

export type FinalizeIntroductionError = 'ALREADY_FINALIZED' | 'INVALID_DATA';

export type FinalizeIntroductionInput = {
  id: Scalars['ID'];
  message: Scalars['String'];
  profileIds: Array<Scalars['ID']>;
};

export type FinalizeIntroductionPayload = {
  __typename?: 'FinalizeIntroductionPayload';
  error?: Maybe<FinalizeIntroductionError>;
  result?: Maybe<Introduction>;
};

export type Introduction = {
  __typename?: 'Introduction';
  calendarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  criteria?: Maybe<Scalars['String']>;
  finalizedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  introducer: Profile;
  message: Scalars['String'];
  profiles: Array<Profile>;
  requests: Array<Request>;
  seller: Profile;
  status: IntroductionStatus;
  updatedAt: Scalars['DateTime'];
};

export type IntroductionStatus = 'FINALIZED' | 'PENDING';

export type LoginError = 'INTERNAL' | 'INVALID_CREDENTIALS';

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  error?: Maybe<LoginError>;
  result?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptRequest?: Maybe<AcceptRequestPayload>;
  createIntroduction: CreateIntroductionPayload;
  createProfile: CreateProfilePayload;
  /**  mutation for deleting a user  */
  deleteUser?: Maybe<Scalars['Boolean']>;
  finalizeIntroduction: FinalizeIntroductionPayload;
  login: LoginPayload;
  register: RegisterPayload;
  rejectRequest?: Maybe<RejectRequestPayload>;
  replyToRequest?: Maybe<ReplyToRequestPayload>;
  sendRequest?: Maybe<SendRequestPayload>;
  updateProfile: UpdateProfilePayload;
  /**  mutation for updating a user  */
  updateUser: User;
};

export type MutationAcceptRequestArgs = {
  id: Scalars['ID'];
};

export type MutationCreateIntroductionArgs = {
  input: CreateIntroductionInput;
};

export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationFinalizeIntroductionArgs = {
  input: FinalizeIntroductionInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationRejectRequestArgs = {
  id: Scalars['ID'];
};

export type MutationReplyToRequestArgs = {
  input: ReplyToRequestInput;
};

export type MutationSendRequestArgs = {
  id: Scalars['ID'];
};

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Profile = {
  __typename?: 'Profile';
  company?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  greeting: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  profileUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  getConfig?: Maybe<Config>;
  getIntroduction?: Maybe<Introduction>;
  getRequest?: Maybe<Request>;
};

export type QueryGetIntroductionArgs = {
  id: Scalars['ID'];
};

export type QueryGetRequestArgs = {
  id: Scalars['ID'];
};

export type RegisterError = 'EXISTING' | 'INTERNAL' | 'PASSWORD_TOO_LONG' | 'PASSWORD_TOO_SHORT';

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterPayload = {
  __typename?: 'RegisterPayload';
  error?: Maybe<RegisterError>;
  result?: Maybe<Scalars['String']>;
};

export type RejectRequestError = 'INTERNAL' | 'NOT_FOUND';

export type RejectRequestPayload = {
  __typename?: 'RejectRequestPayload';
  error?: Maybe<RejectRequestError>;
  result?: Maybe<Request>;
};

export type ReplyToRequestError = 'NOT_FOUND';

export type ReplyToRequestInput = {
  id: Scalars['ID'];
  message?: InputMaybe<Scalars['String']>;
};

export type ReplyToRequestPayload = {
  __typename?: 'ReplyToRequestPayload';
  error?: Maybe<ReplyToRequestError>;
  result?: Maybe<Request>;
};

export type Request = {
  __typename?: 'Request';
  acceptedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  introduction: Introduction;
  profile: Profile;
  rejectedAt?: Maybe<Scalars['DateTime']>;
  repliedAt?: Maybe<Scalars['DateTime']>;
  seenAt?: Maybe<Scalars['DateTime']>;
  sentAt?: Maybe<Scalars['DateTime']>;
  status: RequestStatus;
  updatedAt: Scalars['DateTime'];
};

export type RequestStatus = 'ACCEPTED' | 'OPEN' | 'REJECTED' | 'SENT';

export type SendRequestError = 'INTERNAL' | 'INVALID_DATA' | 'NOT_FOUND';

export type SendRequestPayload = {
  __typename?: 'SendRequestPayload';
  error?: Maybe<SendRequestError>;
  result?: Maybe<Request>;
};

export type Sort = {
  direction: Scalars['Int'];
  field: Scalars['String'];
};

export type UpdateProfileError = 'INTERNAL' | 'INVALID_DATA' | 'NOT_FOUND';

export type UpdateProfileInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  pictureUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateProfilePayload = {
  __typename?: 'UpdateProfilePayload';
  error?: Maybe<UpdateProfileError>;
  result?: Maybe<Profile>;
};

export type UpdateUserInput = {
  /**  Email of the user  */
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  profiles?: Maybe<Array<Profile>>;
  provider: Scalars['String'];
};
