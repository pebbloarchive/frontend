import { App } from '../pulse';
import Logger from '../../modules/logger';
import getConfig from 'next/config';
// const { runtimeConf } = getConfig();
// const { API_URL } = runtimeConf;

const ApiInstance = App.API({
    // baseURL: `${API_URL}`,
    baseURL: `http://api.pebblo.org`,
    options: {
        headers: {
            ['Content-Type']: 'application/json'
        }
    }
});

export default ApiInstance;