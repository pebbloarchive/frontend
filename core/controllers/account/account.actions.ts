import { login, register } from '../../api/routes/account.routes';
import Logger from '../../../modules/logger';
import { AccountData } from './account.state';
import Parent from '.';
import { App } from '../../pulse';
import Api from '../../api/api.service';
import { Account } from '../../interfaces/account.interfaces';
import { resetState } from 'pulse-framework';
import { toast } from 'react-toastify';
import Router from 'next/router';

export const LoginUser = (payload: Account) => {
    AccountData.email.set(payload.email);
    AccountData.id.set(payload.id);
    AccountData.username.set(payload.username);
    AccountData.token.set(payload.token);
    Api.config.options.headers = {
        ...Api.config.options.headers,
        Authorization: `Bearer ${payload.token}`
    }
}

export const Login = async (email: string, password: string): Promise<{
    success: boolean;
    err?: object;
}> => {
    try {
        const user = await login({ email, password })
        if(user.error) throw user.message || user.error;
        LoginUser(user);
        Parent.isUserLoggedIn.set(true);
        return {
            success: true
        }
    } catch(err) {
        toast.error(err);
        return {
            success: false,
            err
        }
    }
}

export const Register = async (email: string, username: string, password: string, samePassword: string): Promise<{
    success: boolean;
    err?: object;
}> => {
    try {
        if(password !== samePassword) throw 'Passwords did not match';
        const user = await register({ email, username, password });
        if(user.error) throw user.message || user.error;
        LoginUser(user);
        Parent.isUserLoggedIn.set(true);
        return {
            success: true
        }
    } catch(err) {
        toast.error(err);
        return {
            success: false,
            err
        }
    }
}

export const logout = async (okay: boolean = false) => {
    if(!okay) return;
    AccountData.email.reset();
    AccountData.id.reset();
    AccountData.username.reset();
    AccountData.token.reset();
    Parent.isUserLoggedIn.reset();
}