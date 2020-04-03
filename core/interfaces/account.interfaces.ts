export interface Account {
    id: number;
    username: string;
    email: string;
    token: string;
    message: string;
    error: string;
}

export interface Device {
    id: string;
    useragent: string;
    theme: string;
  }