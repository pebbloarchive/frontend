import { App } from '../../pulse';

export const AccountData = {
    id: App.State(undefined).type(String).persist('user_id'),
    email: App.State(undefined).type(String).persist('user_email'),
    username: App.State(undefined).type(String).persist('user_username'),
    token: App.State(undefined).type(String).persist('user_token'),
}