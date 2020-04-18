import { User } from './account.interfaces';
export interface Posts {
    token: string;
    account: {
      content: string;
      attachments: string[];
    },
    error?: string;
    message?: string;
  };

  export interface PostInterface {
  id: string; 
  authorId: string;
  author?: User;
  content: string;
  attachments?: string[];
  likes: number;
  created_at: string;
  updated_at?: string;
}