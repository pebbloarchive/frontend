export interface linkedAccounts {
  google?: {
    id: string;
    name: string;
    email: string;
  };
  twitter?: {
    id: string;
    username: string;
    email: string;
  };
  facebook?: {
    id: string;
    username: string;
    email: string;
  };
  twitch?: {
    id: string;
    username: string;
    email: string;
  };
  youtube?: {
    id: string;
    username: string;
    email: string;
  };
  reddit?: {
    id: string;
    username: string;
    email: string;
  };
  spotify?: {
    id: string;
    name: string;
    uri: string;
    email: string;
  };
  discord?: {
    id: string;
    username: string;
    tag: string;
    email: string;
  };
  github?: {
    id: string;
    username: string;
    email: string;
  };
}

export interface AccountBody {
  id: number;
  email: string;
  username: string;
  name: string;
  avatar: string;
  description?: string;
  permissions: string[];
  sessions?: string[];
  followingCount?: number;
  followersCount?: number;
  following?: any;
  followers?: any;
  private?: boolean;
  suspended?: boolean;
  created_at?: string;
  posts: AccountPosts;
  settings?: any;
}

export interface AccountUser {
  id: number;
  username: string;
  name: string;
  avatar: string;
  description?: string;
  permissions: string[];
  followingCount?: number;
  followersCount?: number;
  following?: any;
  followers?: any;
  private?: boolean;
  suspended?: boolean;
  created_at?: string;
  posts: [{
    id: number;
    post_id: number;
    author: number;
    author_info: {
      name: string;
      username: string;
      avatar: string;
      permissions: string[];
    }
    original: number;
    content: string;
    attachments: string[] | string;
    likes: string[];
    shares: string[];
    created_at: string;
    updated_at: string;
    type: string;
  }]
  settings?: any;
}

export interface AccountPosts {
  id: number;
  post_id: number;
  author: number;
  original: number;
  content: string;
  attachments: string[] | string;
  likes: string[];
  shares: string[];
  created_at: string;
  updated_at: string;
  type: string;
  name: string;
  username: string;
  avatar: string;
  permissions: string[];
}

// export interface AccountPostsArray extends AccountPosts {
//   id: number;
//   username: string;
//   posts: AccountPosts;
// }


// export interface AccountPosts {
//   posts: AccountUser;
// }

export interface AccountRelationship extends AccountBody {
  followers: any;
  following: any;
  blocked: string[];
}

export interface AuthCredentials {
  username?: string;
  email: string;
  password: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface AccountData extends AuthTokens {
  account: AccountBody;
}

export interface ChangePassword {
  password: string;
  confirm_password: string;
  new_password: string;
}