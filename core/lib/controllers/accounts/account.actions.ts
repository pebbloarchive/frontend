import { App } from '../../pulse';
import { ICore } from '../../core';
import { AccountState as state, AccountCollection as collection } from './account.controller';
import * as routes from './account.routes';
import * as helpers from './account.helpers';

const core = App.Core<ICore>();

export async function Login(email: string, password: string) {
  try {
    const user = await routes.Login({ email, password });
    if(user.status == 400 || user.status == 401 || user.status == 404) return console.log('Error', 'Unable to login');
    return core.accounts.helpers.loginUserIn(user.data);
  } catch(err) {
    App.Error(err);
  }
}
