import { login, register, user } from '../../api/routes/account.routes';
import { Log } from '../../../utils';
import { AccountData } from './account.state';
import Parent from '.';
import { App } from '../../pulse';
import Api from '../../api/api.service';
import { Auth } from '../../interfaces/account.interfaces';
import { resetState } from 'pulse-framework';
import Router from 'next/router';
import { toast } from 'react-toastify';

export const LogUserIn = (payload: Auth) => {
  AccountData.email.set(payload.account.email);
  AccountData.id.set(payload.account.id);
  AccountData.username.set(payload.account.username);
  AccountData.token.set(payload.token);
}

export const Login = async (email: string, password: string): Promise<{
  success: boolean;
  error?: object;
}> => {
  try {
    const user = await login({ email, password });
    if (user.error) throw user.message || user.error;
    LogUserIn(user);
    Parent.isUserLoggedIn.set(true);
    return {
      success: true
    };
  } catch (error) {
    toast.error(error.toString());
    return {
      success: false,
      error
    };
  }
}

export const Register = async (username: string, email: string, password: string, passwordConfirmation: string): Promise<{
  success: boolean;
  error?: object;
}> => {
  try {
    if (password !== passwordConfirmation) throw 'Passwords didn\'t match.';
    const user = await register({ username, email, password });
    if (user.error) throw user.message || user.error;
    LogUserIn(user);
    Parent.isUserLoggedIn.set(true);
    toast.success(user.message);
    return {
      success: true
    };
  } catch (error) {
    console.log(error)
    console.log(error.message)
    toast.error(error.toString());
    return {
      success: false,
      error
    };
  }
}

export const getUser = async (id: string): Promise<{
  success: boolean;
  error?: object;
}> => {
  try {
    const payload = await user(id);
    if (payload.error) throw payload.message || payload.error;
    return {
      success: true
    }
  } catch(error) {
  toast.error(error.toString());
  return {
      success: false,
      error
    };
  }
}

export const logout = (okay: boolean = false) => {
  if (!okay) return; // This is to avoid firing the function unintentionally like I always do (:
  AccountData.email.reset();
  AccountData.id.reset();
  AccountData.username.reset();
  AccountData.token.reset();
  Parent.isUserLoggedIn.reset();
}