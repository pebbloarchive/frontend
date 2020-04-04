import { App } from '../pulse';

const ApiInstance = App.API({
    baseURL: `http://localhost:42069`,
    // baseURL: `http://api.pebblo.org`,
    options: {
        headers: {
          ['Content-Type']: 'application/json'
        }
    }
});

export default ApiInstance;