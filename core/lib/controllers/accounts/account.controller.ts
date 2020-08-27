import { App } from '../../pulse';
import * as actions from './account.actions';
import * as routes from './account.routes';
import * as helpers from './account.helpers';
import { AccountBody, AuthCredentials } from './account.interfaces';

export const AccountState = {
  TOKEN: App.State<string>(undefined).persist("AUTH_TOKEN"),
  REFRESH_TOKEN: App.State<string>(undefined).persist("AUTH_REFRESH_TOKEN"),
  CACHE: App.State<AccountBody>(undefined).persist("CACHE"),
  // IS_LOGGED: App.State<boolean>(false),
  THEME: App.State<string>("dark").persist("THEME")
}

export const AccountCollection = App.Collection<AccountBody>()(Collection => ({
  groups: {
    AUTHED: Collection.Group().persist("ACCOUNT"),
  },
  selectors: {
    CURRENT: Collection.Selector().persist("CURRENT_ACCOUNT") 
    // idk what to call this, current account seems about right since it is called channel in the pulse example, and we don't call them channels.
  }
}));

const AccountComputed = {
	IS_LOGGED: App.Computed(() => {
    if(AccountCollection.selectors.CURRENT.value) {
      if(AccountCollection.selectors.CURRENT.value.id) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  })
}

const controller = App.Controller({
  state: { ...AccountState, ...AccountComputed },
  collection: AccountCollection,
  routes,
  helpers
}, actions);

export const accounts = controller as typeof controller & typeof actions;