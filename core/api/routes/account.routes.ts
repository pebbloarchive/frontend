import API from '../';
import { Auth, Account } from '../../interfaces/account.interfaces';

export const login = async (payload: {
  email: string;
  password: string;
  remember?: boolean;
}): Promise<any> => (await API.post('auth/login', payload)).data;

export const register = async (payload: {
  username: string;
  email: string;
  password: string;
}): Promise<Account> => (await API.post('auth/register', payload)).data;