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
  id: number;
  author: {
    username: string;
  };
  content: string;
  attachments?: string[];
  likes: number;
  created_at: Date;
  updated_at: Date;
}