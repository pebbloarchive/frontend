export interface Auth {
  token: string;
  account: {
    id: string;
    username: string;
    email: string;
    // permissions: {};
  },
  error?: string;
  message?: string;
};

export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface UserData {
  id: string;
  username: string;
  avatar: string;
  bio: string;
  vanity: string;
  created_at: string;
  updated_at: string;
  is_verified: boolean;
  is_private: boolean;
  permissions: object;
  error?: string;
  message?: string;
}