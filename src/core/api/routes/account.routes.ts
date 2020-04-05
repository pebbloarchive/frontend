import API from '../';
import { Auth } from '../../interfaces/account.interfaces';

export const login = async (payload: {
  email: string;
  password: string;
  remember?: boolean;
}): Promise<Auth> => (await API.post('auth/login', payload)).data;

export const register = async (payload: {
  username: string;
  email: string;
  password: string;
}): Promise<Auth> => (await API.post('auth/register', payload)).data;