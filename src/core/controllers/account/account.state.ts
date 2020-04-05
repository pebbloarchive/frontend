import { App } from '../../pulse';

export const AccountData = {
  id: App.State(undefined).type(String).persist('user-id'),
  email: App.State(undefined).type(String).persist('user-email'),
  username: App.State(undefined).type(String).persist('user-username'),
  token: App.State(undefined).type(String).persist('user-token')
}