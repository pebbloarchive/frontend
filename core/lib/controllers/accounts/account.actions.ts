import { App } from '../../pulse';
import { ICore } from '../../core';
import { AccountState as state, AccountCollection as collection } from './account.controller';
import * as routes from './account.routes';
import * as helpers from './account.helpers';
import { AccountPosts, AccountRelationship } from './account.interfaces';
import API from '../../api';
import zxcvbn from 'zxcvbn';

const core = App.Core<ICore>();

export async function Login(email: string, password: string) {
  try {
    const user = await routes.Login({ email, password });
    if(user.status === 404 || user.status === 400 || user.status === 401) return console.log('Error', 'Unable to login');
    return core.accounts.helpers.loginUserIn(user.data);
  } catch(err) {
    App.Error(err);
  }
}

export async function changePassword(password: string, new_password: string, confirm_password: string) {
  // if(!password || !new_password || !confirm_password) throw new Error('Missing required information.');

  if(confirm_password !== new_password) throw new Error('Confirm password did not match.');

  const { score } = zxcvbn(new_password);

  if(score < 3) throw new Error('Password was too weak, please choose a stronger password.');

  try {
    const user = await core.accounts.routes.changePassword({ password, new_password, confirm_password });
    if(user.status !== 200) throw new Error('Unable to update password');
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