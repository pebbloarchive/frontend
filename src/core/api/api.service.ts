import { App } from '../pulse';
import { Log } from '../../utils';

const ApiInstance = App.API({
  baseURL: 'https://dev-api.pebblo.org/v1',
  options: {
    headers: {
      ['content-type']: 'application/json',
    }
  }
})

export const updateUrl = (url: string, version: string = 'v1') => {
  const newUrl = `${url}/${version}`;
  Log('API', 'Updated the API url to be', newUrl);
  ApiInstance.config.baseURL = newUrl;
}

export default ApiInstance;