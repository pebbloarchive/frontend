import { App } from '../../pulse';
import * as actions from './account.actions';
import * as routes from './account.routes';
import * as helpers from './account.helpers';
import { AccountBody, AuthCredentials } from './account.interfaces';

export const AccountState = {
  TOKEN: App.State<string>(undefined).persist("AUTH_TOKEN"),
  REFRESH_TOKEN: App.State<string>(undefined).persist("AUTH_REFRESH_TOKEN"),
  CACHE: App.State<AccountBody>(undefined).persist("CACHE"),
  THEME: App.State<string>("dark").persist("THEME"),
  USER_INITIALIZED: App.State<boolean>(false)
}

export const AccountCollection = App.Collection<AccountBody>()(Collection => ({
  groups: {
    AUTHED: Collection.Group().persist("ACCOUNT")
  },
  selectors: {
    CURRENT: Collection.Selector().persist("CURRENT_ACCOUNT") 
    // idk what to call this, current account seems about right since it is called channel in the pulse example, and we don't call them channels.
  }
}));

// const AccountComputed = {
// 	IS_LOGGED: App.Computed(() => {
//     if(AccountCollection.selectors.CURRENT.value) {
//       if(AccountCollection.selectors.CURRENT.id) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//     return false;
//   })
// }

export const AccountComputed = {
  IS_LOGGED: App.Computed(() => (
    AccountCollection.selectors.CURRENT.value ? AccountCollection.selectors.CURRENT.id ? true : false : false
  ), [AccountCollection.selectors.CURRENT])
}

console.log(AccountCollection.selectors.CURRENT.value)

setTimeout(() => console.log(AccountCollection.selectors.CURRENT), 500);

const controller = App.Controller({
  state: { ...AccountState, ...AccountComputed },
  collection: AccountCollection,
  routes,
  helpers
}).root(actions);


export const accounts = controller as typeof controller;
