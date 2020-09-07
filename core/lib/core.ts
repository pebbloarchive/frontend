import { App } from './pulse';
import { accounts } from './controllers/accounts';
import { settings } from './controllers/settings';

export const core = App.Core({
  accounts,
  settings
});

export type ICore = typeof core;
