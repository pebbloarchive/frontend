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
  avatar: string;
  description?: string;
  permissions: string[];
  sessions?: string[];
  followingCount?: number;
  followerCount?: number;
  linkedAccounts?: linkedAccounts;
  private?: boolean;
  suspended?: boolean;
  suspended_at?: string;
  created_at?: string;
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