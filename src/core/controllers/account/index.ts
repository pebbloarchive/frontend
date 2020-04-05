import { Login, Register, logout } from './account.actions';
import { AccountData } from './account.state';
import { App } from '../../pulse';

export default {
  logout,
  login: Login,
  register: Register,
  isUserLoggedIn: App.State(false).type(Boolean).persist('userLogged'),
  data: AccountData
};