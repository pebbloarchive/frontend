import { Login, Register, logout } from './account.actions';
import { AccountData } from './account.state';
import { App } from '../../pulse';

export default {
    login: Login,
    register: Register,
    logout: logout,
    isUserLoggedIn: App.State(false).type(Boolean).persist('loggedIn'),
    data: AccountData
}