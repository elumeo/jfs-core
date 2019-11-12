import axios, { AxiosPromise, AxiosResponse } from 'axios';
import Session from './Session';
import IConfig from './IConfig';
import { version } from '../../package.json';

export default class JscClient {

  static Config: IConfig = {} as IConfig;

  static setConfig = Config => {
    JscClient.Config = Config;
  }

  static createAxiosConfig = () => ({
    ...JscClient.Config,
    baseURL: JscClient.Config.JscClient.Host,
    timeout: JscClient.Config.JscClient.Timeout,
    validateStatus: (status: number) => status < 400
  })

  static createClient = () => {
    const instance = axios.create(
      JscClient.createAxiosConfig()
    );

    instance.defaults.headers = {
      'X-JSC-APP-VERSION': `${JscClient.Config.AppName}-${version}`,
      ...(
        Session.isLoggedIn()
          ? { 'X-JSC-TOKEN': Session.getToken() }
          : {}
      )
    };

    return instance;
  }

  static get = <R>(url: string, params: any) => (
    JscClient
      .createClient()
      .get<R>(url, params)
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
        ...params
      })
  )
}
