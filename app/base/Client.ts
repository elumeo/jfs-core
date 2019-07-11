import axios, { AxiosPromise } from 'axios';
import Config from './Config';
import Session from "./Session";

const generateAxiosConfig = (config: any = {}): any => {
  config.baseURL = Config.Client.Host;
  config.timeout = Config.Client.Timeout;
  config.validateStatus = (status: number) => status < 400;
  return config;
};

const clientInstance = () => {
  let instance = axios.create(generateAxiosConfig());
  if (Session.isLoggedIn()) {
    instance.defaults.headers = { 'X-JSC-TOKEN': Session.getToken() };
  } else {
    instance.defaults.headers = {};
  }
  return instance;
};

export default {
  get: (url, params) => {
    return clientInstance()
      .get(url, params)
      .catch(error => checkDestroySession(error));
  },

  post: (url: string, data: any, config?: any) => {
    return clientInstance()
      .post(url, data, config)
      .catch(error => checkDestroySession(error));
  },

  put: (url: string, data: any, config?: any) => {
    return clientInstance()
      .put(url, data, config)
      .catch(error => checkDestroySession(error));
  },

  delete: (url: string, data: any, config?: any) => {
    config = generateAxiosConfig(config);
    config.data = data; // need to use our jsc kind of DELETE request

    return clientInstance()
      .delete(url, config)
      .catch(error => checkDestroySession(error));
  }
};

function checkDestroySession(error): AxiosPromise {
  if (error.response && error.response.status && error.response.status == 401) {
    Session.removeToken();
  }

  throw error;
}
