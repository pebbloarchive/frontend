export interface Auth {
  token: string;
  account: {
    id: string;
    username: string;
    email: string;
    // permissions: [];
  },
  error?: string;
  message?: string;
};

export interface User {
  id: string;
  username: string;
}