import { Login, Register, logout, getUser } from './account.actions';
import { AccountData, AccountCollection } from './account.state';
import { App } from '../../pulse';

export default {
  collection: AccountCollection,
  logout,
  getUser,
  login: Login,
  register: Register,
  isUserLoggedIn: App.State(false).type(Boolean).persist('userLogged'),
  data: AccountData
};