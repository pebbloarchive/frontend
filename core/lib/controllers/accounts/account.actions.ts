import { App } from '../../pulse';
import { ICore } from '../../core';
import { AccountState as state, AccountCollection as collection } from './account.controller';
import * as routes from './account.routes';
import * as helpers from './account.helpers';
import { AccountPosts, AccountRelationship } from './account.interfaces';
import API from '../../api';

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

// export async function loadPosts(posts: AccountPostsArray) {
//   try {
//     // const posts: AccountPostsArray = await core.accounts.routes.getUserPosts(username);
//     core.accounts.collection.collect(posts, 'MY_POSTS');
//   } catch(err) {
//     App.Error(err);
//   }
// }

// export async function getFollowers() {
//   try {
//     API.config.options.headers['authorization'] = 'Bearer ' + core.accounts.state.TOKEN.value;
//     let followers = await core.accounts.routes.getFollowers();
//     core.accounts.collection.collect(followers, 'FOLLOWERS');
//   } catch(err) {
//     App.Error(err);
//   }
// }