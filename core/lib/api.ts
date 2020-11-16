import { App } from './pulse';
import { ICore } from "./core";
import Pulse, { PulseResponse } from 'pulse-framework';

const core = App.Core<ICore>();

export const API = App.API({
  // baseURL: 'http://97.84.165.72:3000/1.0',
  // baseURL: 'https://api.pebblo.org/1.0',
  baseURL: 'http://207.244.229.132:3000/1.0',
  options: {
    headers: {
      ['content-type']: 'application/json'
    }
  },
  responseIntercept(res: PulseResponse) {
    if(res.status === 401) {
      // if(core.accounts.state.IS_LOGGED.is(true)) core.accounts.helpers.refreshUser();
    }
  }
}); // idk i watched a ben awad tutorial on how to refresh tokens in react https://www.youtube.com/watch?v=3qLJPLN33DE

export default API;
