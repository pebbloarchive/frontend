import { App } from '../../pulse';
import * as actions from './setting.actions';
import * as routes from './setting,routes';
import * as helpers from './setting.helpers';

export const SettingsState = {
  THEME: App.State<String>("light").persist("THEME")
}

const controller = App.Controller({
  state: SettingsState,
  routes: routes,
  helpers: helpers
}).root(actions);

export const settings = controller as typeof controller;
