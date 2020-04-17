import { App } from '../../pulse';
import { User } from '../../interfaces/account.interfaces';

export const AccountData = {
  id: App.State(undefined).type(String).persist('user-id'),
  email: App.State(undefined).type(String).persist('user-email'),
  username: App.State(undefined).type(String).persist('user-username'),
  token: App.State(undefined).type(String).persist('user-token')
}

export const AccountCollection = App.Collection<User>({
  groups: ['following']
})

AccountCollection.collect({
  id: 'x6_0pG',
  username: 'Kyle'
}, 'following')