import { App } from '../../app';
import { ICore } from '../../core';
import { AccountState as state, AccountCollection as collection, AccountCollection } from './account.controller';
import * as routes from './account.routes';
import { AccountBody, AccountData, AuthTokens, AccountUser } from './account.interfaces';
import API from '../../api';
import { resetState } from 'pulse-framework';

const core = App.Core<ICore>();

export async function logUserIn(data: AccountData) {
  state.TOKEN.set(data.access_token);
  state.REFRESH_TOKEN.set(undefined);
  // API.config.options.headers['authorization'] = 'Bearer ' + data.access_token;
  // const account: AccountBody = await core.accounts.routes.accountCache();
  const account: AccountBody = data.account;
  // console.log(account)
  collection.collect(account, 'AUTHED');
  collection.selectors.CURRENT.select(account.id);
  state.CACHE.set(account);
  // API.config.options.headers['authorization'] = 'Bearer ' + state.TOKEN.value;
  // let followers = await core.accounts.routes.getFollowers();
  // core.accounts.collection.collect(followers, 'RELATIONSHIPS');
  // state.IS_LOGGED.set(true);
}

export async function refreshUser() {
  const [token, refresh] = [state.TOKEN.value, state.REFRESH_TOKEN.value];
  if(!token || !refresh) return resetData();
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
  state.CACHE.reset();
  resetState([collection, state.TOKEN, state.REFRESH_TOKEN, core.settings.state.THEME]);
}

export async function getFollowers() {
    try {
      API.config.options.headers['authorization'] = 'Bearer ' + state.TOKEN.value;
      let followers = await core.accounts.routes.getRelationships();
      core.accounts.collection.collect(followers, 'FOLLOWERS');
    } catch(err) {
      App.Error(err);
    }
}

export async function getUserData() {
  API.config.options.headers['authorization'] = 'Bearer ' + state.TOKEN.value;
  const account = await routes.getSelf();
  collection.update(collection.selectors.CURRENT.value.id, account);
}

export async function initUser() {
  if(state.USER_INITIALIZED.is(true)) return;
  const [token] = [state.TOKEN.value];
  if(!token) return resetData();
  API.config.options.headers['authorization'] = 'Bearer ' + token;
  if(state.CACHE.isNot(undefined)) {
    if(collection.selectors.CURRENT && collection.selectors.CURRENT.id !== state.CACHE.value.id) {
      state.CACHE.reset();
    } else {
      collection.collect(state.CACHE.value, 'AUTHED');
    }
    setTimeout(getUserData, 500);
  }
  return state.USER_INITIALIZED.set(true);
}
