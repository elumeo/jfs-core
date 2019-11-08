import axios from 'axios';
import Session from './Session';

/**
 * You have to load the config your self.
 * Once the config is loaded you have to injected it here using injectConfig().
 *
 * All client calls will be delayed as long as the config wasn't injected.
 */

let Config = null;

const generateAxiosConfig = (config: any, callback): any => {
  if (Config) {
    return callback({
      ...config,
      baseURL: Config.JscClient.Host,
      timeout: Config.JscClient.Timeout,
      validateStatus: (status: number) => status < 400
    });
  }
  else {
    /* Wait for the config to get injected */
    setTimeout(() => generateAxiosConfig(config, callback), 200);
  }
};

export const clientInstance = (callback) => generateAxiosConfig(
  {},
  axiosConfig => {
    const instance = axios.create(axiosConfig);

    instance.defaults.headers = Session.isLoggedIn()
      ? { 'X-JSC-TOKEN': Session.getToken() }
      : {};

    return callback(instance, axiosConfig);
  }
);

export const injectConfig = config => {
  Config = config;
};

function checkDestroySession(error) {
  if (error.response && error.response.status && error.response.status == 401) {
    Session.removeToken();
  }
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
          .catch(error => {
            checkDestroySession(error);
            throw error;
          })
      )
    );
  },

  put: (url: string, data: any, config?: any) => {
    return clientInstance(
      instance => (
        instance
          .put(url, data, config)
          .catch(error => {
            checkDestroySession(error);
            throw error;
          })
      )
    );
  },

  delete: (url: string, data: any, config?: any) => {
    return clientInstance(
      (instance, axiosConfig) => (
        instance
          .delete(url, { ...axiosConfig, data, config })
          .catch(error => {
            checkDestroySession(error);
            throw error;
          })
      )
    );
  }
};
