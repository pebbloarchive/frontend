export interface Account {
    message: string;
    token: string;
    id: number;
    username: string;
    email: string;
    error: string;
}

export interface Auth {
    email: string;
    password: string;
    remember?: boolean;
}

export interface Device {
    id: string;
    useragent: string;
    theme: string;
  }