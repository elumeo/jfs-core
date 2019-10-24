import axios, { AxiosPromise } from 'axios';
import Session from './Session';

let dispatchConfig;

let Config = null;
let pending = false;

const generateAxiosConfig = (config: any, callback): any => {
  if (Config) {
    pending = false;
    dispatchConfig(Config);
    console.log(Config);
    return callback({
      ...config,
      baseURL: Config.HttpClient.Host,
      timeout: Config.HttpClient.Timeout,
      validateStatus: (status: number) => status < 400
    });
  }
  else if (!pending) {
    axios.get('/config.json').then(response => {
      Config = response.data;
      generateAxiosConfig(config, callback);
    });
    pending = true;
  }
  else {
    setTimeout(() => generateAxiosConfig(config, callback), 200);
  }
};

const clientInstance = (callback) => generateAxiosConfig(
  {},
  axiosConfig => {
    const instance = axios.create(axiosConfig);

    instance.defaults.headers = Session.isLoggedIn()
      ? { 'X-JSC-TOKEN': Session.getToken() }
      : {};

    return callback(instance, axiosConfig);
  }
);

function checkDestroySession(error): AxiosPromise {
  if (error.response && error.response.status && error.response.status == 401) {
    Session.removeToken();
  }

  throw error;
}

export const registerConfigDispatchHandler = dispatchHandler => {
  dispatchConfig = dispatchHandler;
}

export default {
  get: async (url, params): Promise<any> => {
    return await new Promise((resolve, reject) => {
      clientInstance(
        instance => (
          instance
            .get(url, params)
            .then(resolve)
            .catch(error => {
              checkDestroySession(error);
              reject(error);
            })
        )
      )
    });
  },

  post: (url: string, data: any, config?: any) => {
    return clientInstance(
      instance => (
        instance
          .post(url, data, config)
          .catch(error => checkDestroySession(error))
      )
    );
  },

  put: (url: string, data: any, config?: any) => {
    return clientInstance(
      instance => (
        instance
          .put(url, data, config)
          .catch(error => checkDestroySession(error))
      )
    );
  },

  delete: (url: string, data: any, config?: any) => {
    return clientInstance(
      (instance, axiosConfig) => (
        instance
          .delete(url, { ...axiosConfig, data })
          .catch(error => checkDestroySession(error))
      )
    );
  }
};
