import { API } from '../../api';
import { AccountBody, AuthCredentials, AuthTokens } from './account.interfaces';
import { PulseResponse } from 'pulse-framework';

export const Login = async (payload: AuthCredentials): Promise<PulseResponse> =>
	(await API.post("auth/login", payload)).data;

export const getRefreshToken = async(payload: {
	refresh_token: string
}): Promise<AuthTokens> => (await API.post('auth/refresh', payload)).data;

export const accountCache = async(): Promise<AccountBody> => (await API.get('users/@me')).data;

export const getUser = async(id: number): Promise<AccountBody> => (await API.get(`users/${id}`)).data;
