export interface Posts {
    token: string;
    account: {
      content: string;
      attachments: string[];
    },
    error?: string;
    message?: string;
  };