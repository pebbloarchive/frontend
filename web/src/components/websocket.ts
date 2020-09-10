import Mesa from 'mesa-js-client';
import core from '@pebblo/core'
import { Log } from './utils';

let server;

export const connectWebsockets = () => {
  const client = new Mesa('ws://localhost:4000', { autoConnect: true });
  server = client;

  client.onConnected = async () => {
    Log('WebSocket', 'Connected to WS server');
    const user = await client.authenticate({ token: core.accounts.state.TOKEN.value });
    // @ts-ignore
    Log('WebSocket', `Hello ${user.username}`)
  }
}

export const getWebsocketClient = () => {
  if(!server) Log('WebSocket', 'No client was found');
  return server;
}
