import { App } from '../../pulse';
import { ICore } from '../../core';
import { AccountState as state, AccountCollection as collection, AccountCollection } from './account.controller';
import { AccountBody, AccountData, AuthTokens } from './account.interfaces';
import API from '../../api';

const core = App.Core<ICore>();

export async function loginUserIn(data: AccountData) {
  state.TOKEN.set(data.access_token);
  state.REFRESH_TOKEN.set(undefined);
  // API.config.options.headers['authorization'] = 'Bearer ' + data.access_token;
  // const account: AccountBody = await core.accounts.routes.accountCache();
  const account: AccountBody = data.account;
  // console.log(account)
  collection.collect(account, 'AUTHED');
  collection.selectors.CURRENT.select(account.id);
  state.CACHE.set(account);
  // state.IS_LOGGED.set(true);
}

export async function refreshUser() {
  const [token, refresh] = [state.TOKEN.value, state.REFRESH_TOKEN.value];
  if(!token || !refresh) resetData();
  API.config.options.headers['authorization'] = 'Bearer ' + token;
  try {
    const { refresh_token, access_token } = await core.accounts.routes.getRefreshToken({ refresh_token: token });
    state.TOKEN.set(access_token);
    state.REFRESH_TOKEN.set(refresh_token);
    API.config.options.headers['authorization'] = 'Bearer ' + access_token;
  } catch(err) {
    App.Error(err);
    return resetData();
  }
}

export async function resetData() {
  collection.selectors.CURRENT.select(undefined);
  collection.reset();
  state.TOKEN.reset();
  state.REFRESH_TOKEN.reset();
  state.CACHE.reset();
  state.THEME.reset();
}
