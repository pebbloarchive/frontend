import { API } from '../../api';
import { AccountBody, AuthCredentials, AuthTokens, AccountUser, AccountPosts, AccountRelationship, ChangePassword } from './account.interfaces';
import { PulseResponse } from 'pulse-framework';

export const Login = async(payload: AuthCredentials): Promise<PulseResponse> => (await API.post('auth/login', payload)).data;

export const Create = async(payload: AuthCredentials): Promise<PulseResponse> => (await API.post('auth/register', payload)).data;

export const changePassword = async(payload: ChangePassword): Promise<PulseResponse> => (await API.post('auth/update/password', payload)).data;

export const getRefreshToken = async(payload: {
	refresh_token: string
}): Promise<AuthTokens> => (await API.post('auth/refresh', payload)).data;

export const accountCache = async(): Promise<AccountBody> => (await API.get('users/@me')).data;

export const getUser = async(name: string): Promise<AccountUser> => (await API.get(`users/${name}`)).data

export const getSelf = async(): Promise<AccountUser> => (await API.get(`users/@me`)).data;;

export const getPost = async(id: string): Promise<AccountPosts> => (await API.get(`users/posts/${id}`)).data;

export const getUserPosts = async(username: string): Promise<AccountPosts> => (await API.get(`users/${username}/posts`)).data;

export const getRelationships = async(): Promise<AccountRelationship> => (await API.get(`users/@me/relationships`)).data;

export const followUser = async(id: number): Promise<PulseResponse> => (await API.post(`users/follow/${id}`)).data;

export const unfollowUser = async(id: number): Promise<PulseResponse> => (await API.delete(`users/unfollow/${id}`)).data;
