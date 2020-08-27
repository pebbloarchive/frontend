import { App } from './pulse';
import { accounts } from './controllers/accounts';

export const core = App.Core({
  accounts
});

export type ICore = typeof core;