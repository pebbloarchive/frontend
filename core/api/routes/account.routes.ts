import API from '../';
import { Account } from '../../interfaces/account.interfaces';

export const login = async (payload: {
    email: string;
    password: string;
    remember?: boolean;
}): Promise<Account> => (await API.post('auth/login', payload)).data;


export const register = async (payload: {
    email: string;
    username: string;
    password: string;
}): Promise<Account> => (await API.post('auth/login', payload)).data;

