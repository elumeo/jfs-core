import axios, { AxiosPromise } from 'axios';
import Session from './Session';

export default class JscClient {

  static Config: any = {};

  static setConfig = Config => {
    JscClient.Config = Config;
  }

  static createAxiosConfig = () => ({
    ...JscClient.Config,
    baseURL: JscClient.Config.Client.Host,
    timeout: JscClient.Config.Client.Timeout,
    validateStatus: (status: number) => status < 400
  })

  static createClient = () => {
    const instance = axios.create(
      JscClient.createAxiosConfig()
    );

    instance.defaults.headers = Session.isLoggedIn()
      ? { 'X-JSC-TOKEN': Session.getToken() }
      : {};

    return instance;
  }

  static get = (url: string, params: any): AxiosPromise<any> => (
    JscClient
      .createClient()
      .get(url, params)
  )

  static post = (url: string, data: any, params: any): AxiosPromise<any> => (
    JscClient
      .createClient()
      .post(url, data, params)
  )

  static put = (url: string, data: any, params: any): AxiosPromise<any> => (
    JscClient
      .createClient()
      .put(url, data, params)
  )

  static delete = (url: string, data: any, params: any): AxiosPromise<any> => (
    JscClient
      .createClient()
      .delete(url, {
        ...JscClient.createAxiosConfig(),
        data,
        config: params
      })
  )
}
