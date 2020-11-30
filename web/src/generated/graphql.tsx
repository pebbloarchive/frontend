import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
};

export type Query = {
  __typename?: 'Query';
  posts: PaginatedPosts;
  post?: Maybe<Post>;
  me?: Maybe<User>;
  user: UserResponse;
  register: Scalars['String'];
};


export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryRegisterArgs = {
  options: UsernamePasswordInput;
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  posts: Array<Post>;
  hasMore: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  author: Scalars['String'];
  creator: Creator;
  content: Scalars['String'];
  media: Array<Scalars['String']>;
  likes: Array<Scalars['String']>;
  shares: Array<Scalars['String']>;
  subs: Array<Subs>;
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
};

export type Creator = {
  __typename?: 'Creator';
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type Subs = {
  __typename?: 'Subs';
  id?: Maybe<Scalars['String']>;
  owner?: Maybe<Owner>;
  content?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type Owner = {
  __typename?: 'Owner';
  id?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  avatar: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  location: Scalars['String'];
  description: Scalars['String'];
  private: Scalars['Boolean'];
  verified: Scalars['Boolean'];
  blocked: Array<Scalars['String']>;
  followers: Array<Scalars['String']>;
  following: Array<Scalars['String']>;
  permissions: Array<Scalars['String']>;
  posts: Array<Scalars['String']>;
  totpSecret: Scalars['String'];
  totpEnabled: Scalars['Boolean'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  like: Scalars['Boolean'];
  share: Scalars['Boolean'];
  commentPost: PostResponse;
  deleteSub: PostResponse;
  createPost: PostResponse;
  updatePost?: Maybe<PostResponse>;
  deletePost: Scalars['Boolean'];
  followUser: UserResponse;
  unfollowUser: UserResponse;
  updateAccount: UserResponse;
  updateUser: UserResponse;
  forgotPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationLikeArgs = {
  id: Scalars['String'];
};


export type MutationShareArgs = {
  id: Scalars['String'];
};


export type MutationCommentPostArgs = {
  content: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteSubArgs = {
  subid: Scalars['String'];
  id: Scalars['String'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  content?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationFollowUserArgs = {
  id: Scalars['String'];
};


export type MutationUnfollowUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  private?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationUpdateUserArgs = {
  verified?: Maybe<Scalars['Boolean']>;
  private?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  errors?: Maybe<Array<FieldErrors>>;
  post?: Maybe<Post>;
};

export type FieldErrors = {
  __typename?: 'FieldErrors';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AnyPostResponseFragment = (
  { __typename?: 'PostResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldErrors' }
    & Pick<FieldErrors, 'field' | 'message'>
  )>>, post?: Maybe<(
    { __typename?: 'Post' }
    & PostSnippetFragment
  )> }
);

export type AnyUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'name' | 'email' | 'avatar' | 'description' | 'followers' | 'following' | 'verified' | 'permissions' | 'createdAt' | 'updatedAt'>
);

export type AnyUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & Pick<FieldError, 'field' | 'message'>
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & AnyUserFragment
  )> }
);

export type PostSnippetFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'author' | 'content' | 'likes' | 'shares' | 'media' | 'created_at' | 'updated_at'>
  & { subs: Array<(
    { __typename?: 'Subs' }
    & Pick<Subs, 'id' | 'createdAt'>
    & { owner?: Maybe<(
      { __typename?: 'Owner' }
      & Pick<Owner, 'id' | 'username' | 'avatar' | 'verified'>
    )> }
  )>, creator: (
    { __typename?: 'Creator' }
    & Pick<Creator, 'id' | 'username' | 'name' | 'verified' | 'avatar'>
  ) }
);

export type DeleteSubMutationVariables = Exact<{
  id: Scalars['String'];
  subid: Scalars['String'];
}>;


export type DeleteSubMutation = (
  { __typename?: 'Mutation' }
  & { deleteSub: (
    { __typename?: 'PostResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldErrors' }
      & Pick<FieldErrors, 'field' | 'message'>
    )>>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'author'>
    )> }
  ) }
);

export type CommentPostMutationVariables = Exact<{
  id: Scalars['String'];
  content: Scalars['String'];
}>;


export type CommentPostMutation = (
  { __typename?: 'Mutation' }
  & { commentPost: (
    { __typename?: 'PostResponse' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'author' | 'content' | 'created_at' | 'updated_at'>
    )> }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'PostResponse' }
    & AnyPostResponseFragment
  ) }
);

export type DeletePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePost'>
);

export type FollowMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type FollowMutation = (
  { __typename?: 'Mutation' }
  & { followUser: (
    { __typename?: 'UserResponse' }
    & AnyUserResponseFragment
  ) }
);

export type LikeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'like'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & AnyUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & AnyUserResponseFragment
  ) }
);

export type ShareMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type ShareMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'share'>
);

export type UnfollowUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnfollowUserMutation = (
  { __typename?: 'Mutation' }
  & { unfollowUser: (
    { __typename?: 'UserResponse' }
    & AnyUserResponseFragment
  ) }
);

export type UpdateAccountMutationVariables = Exact<{
  private: Scalars['Boolean'];
  avatar: Scalars['String'];
  description: Scalars['String'];
  location: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  username: Scalars['String'];
}>;


export type UpdateAccountMutation = (
  { __typename?: 'Mutation' }
  & { updateAccount: (
    { __typename?: 'UserResponse' }
    & AnyUserResponseFragment
  ) }
);

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & { updatePost?: Maybe<(
    { __typename?: 'PostResponse' }
    & AnyPostResponseFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & AnyUserFragment
  )> }
);

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & PostSnippetFragment
  )> }
);

export type PostsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PaginatedPosts' }
    & Pick<PaginatedPosts, 'hasMore'>
    & { posts: Array<(
      { __typename?: 'Post' }
      & PostSnippetFragment
    )> }
  ) }
);

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'name' | 'avatar' | 'description' | 'followers' | 'following' | 'verified' | 'permissions' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export const PostSnippetFragmentDoc = gql`
    fragment PostSnippet on Post {
  id
  author
  content
  likes
  shares
  media
  subs {
    id
    createdAt
    owner {
      id
      username
      avatar
      verified
    }
  }
  creator {
    id
    username
    name
    verified
    avatar
  }
  created_at
  updated_at
}
    `;
export const AnyPostResponseFragmentDoc = gql`
    fragment AnyPostResponse on PostResponse {
  errors {
    field
    message
  }
  post {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;
export const AnyUserFragmentDoc = gql`
    fragment AnyUser on User {
  id
  username
  name
  email
  avatar
  description
  followers
  following
  verified
  permissions
  createdAt
  updatedAt
}
    `;
export const AnyUserResponseFragmentDoc = gql`
    fragment AnyUserResponse on UserResponse {
  errors {
    field
    message
  }
  user {
    ...AnyUser
  }
}
    ${AnyUserFragmentDoc}`;
export const DeleteSubDocument = gql`
    mutation DeleteSub($id: String!, $subid: String!) {
  deleteSub(id: $id, subid: $subid) {
    errors {
      field
      message
    }
    post {
      id
      author
    }
  }
}
    `;
export type DeleteSubMutationFn = Apollo.MutationFunction<DeleteSubMutation, DeleteSubMutationVariables>;

/**
 * __useDeleteSubMutation__
 *
 * To run a mutation, you first call `useDeleteSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubMutation, { data, loading, error }] = useDeleteSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *      subid: // value for 'subid'
 *   },
 * });
 */
export function useDeleteSubMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubMutation, DeleteSubMutationVariables>) {
        return Apollo.useMutation<DeleteSubMutation, DeleteSubMutationVariables>(DeleteSubDocument, baseOptions);
      }
export type DeleteSubMutationHookResult = ReturnType<typeof useDeleteSubMutation>;
export type DeleteSubMutationResult = Apollo.MutationResult<DeleteSubMutation>;
export type DeleteSubMutationOptions = Apollo.BaseMutationOptions<DeleteSubMutation, DeleteSubMutationVariables>;
export const CommentPostDocument = gql`
    mutation CommentPost($id: String!, $content: String!) {
  commentPost(id: $id, content: $content) {
    post {
      id
      author
      content
      created_at
      updated_at
    }
  }
}
    `;
export type CommentPostMutationFn = Apollo.MutationFunction<CommentPostMutation, CommentPostMutationVariables>;

/**
 * __useCommentPostMutation__
 *
 * To run a mutation, you first call `useCommentPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentPostMutation, { data, loading, error }] = useCommentPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCommentPostMutation(baseOptions?: Apollo.MutationHookOptions<CommentPostMutation, CommentPostMutationVariables>) {
        return Apollo.useMutation<CommentPostMutation, CommentPostMutationVariables>(CommentPostDocument, baseOptions);
      }
export type CommentPostMutationHookResult = ReturnType<typeof useCommentPostMutation>;
export type CommentPostMutationResult = Apollo.MutationResult<CommentPostMutation>;
export type CommentPostMutationOptions = Apollo.BaseMutationOptions<CommentPostMutation, CommentPostMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($content: String!) {
  createPost(content: $content) {
    ...AnyPostResponse
  }
}
    ${AnyPostResponseFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($id: String!) {
  deletePost(id: $id)
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, baseOptions);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const FollowDocument = gql`
    mutation Follow($id: String!) {
  followUser(id: $id) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, baseOptions);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const LikeDocument = gql`
    mutation Like($id: String!) {
  like(id: $id)
}
    `;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, baseOptions);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;
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
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;
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
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ShareDocument = gql`
    mutation Share($id: String!) {
  share(id: $id)
}
    `;
export type ShareMutationFn = Apollo.MutationFunction<ShareMutation, ShareMutationVariables>;

/**
 * __useShareMutation__
 *
 * To run a mutation, you first call `useShareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareMutation, { data, loading, error }] = useShareMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useShareMutation(baseOptions?: Apollo.MutationHookOptions<ShareMutation, ShareMutationVariables>) {
        return Apollo.useMutation<ShareMutation, ShareMutationVariables>(ShareDocument, baseOptions);
      }
export type ShareMutationHookResult = ReturnType<typeof useShareMutation>;
export type ShareMutationResult = Apollo.MutationResult<ShareMutation>;
export type ShareMutationOptions = Apollo.BaseMutationOptions<ShareMutation, ShareMutationVariables>;
export const UnfollowUserDocument = gql`
    mutation UnfollowUser($id: String!) {
  unfollowUser(id: $id) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;
export type UnfollowUserMutationFn = Apollo.MutationFunction<UnfollowUserMutation, UnfollowUserMutationVariables>;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnfollowUserMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowUserMutation, UnfollowUserMutationVariables>) {
        return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, baseOptions);
      }
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($private: Boolean!, $avatar: String!, $description: String!, $location: String!, $email: String!, $name: String!, $username: String!) {
  updateAccount(
    private: $private
    avatar: $avatar
    description: $description
    location: $location
    email: $email
    name: $name
    username: $username
  ) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      private: // value for 'private'
 *      avatar: // value for 'avatar'
 *      description: // value for 'description'
 *      location: // value for 'location'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, baseOptions);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: String!, $content: String!) {
  updatePost(id: $id, content: $content) {
    ...AnyPostResponse
  }
}
    ${AnyPostResponseFragmentDoc}`;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, baseOptions);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...AnyUser
  }
}
    ${AnyUserFragmentDoc}`;

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
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PostDocument = gql`
    query Post($id: String!) {
  post(id: $id) {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, baseOptions);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostsDocument = gql`
    query Posts($limit: Int!, $cursor: String) {
  posts(cursor: $cursor, limit: $limit) {
    hasMore
    posts {
      ...PostSnippet
    }
  }
}
    ${PostSnippetFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, baseOptions);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const UserDocument = gql`
    query User($username: String!) {
  user(username: $username) {
    errors {
      field
      message
    }
    user {
      id
      username
      name
      avatar
      description
      followers
      following
      verified
      permissions
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;