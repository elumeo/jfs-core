import * as Token from '../LOCAL_STORAGE/Token';
import { Configuration } from 'Types/Configuration';

import { HttpClient } from 'API/HTTP/HttpClient';
import { AxiosRequestConfig } from 'axios';

export default class JscClient extends HttpClient {
  static Config: Configuration = {} as Configuration;
  static PackageJson: { version: string } = {} as { version: string };

  static setConfig = (Config: Configuration): void => {
    JscClient.Config = Config;
    JscClient.setConfigGenerator(JscClient.generateAxiosConfig);
  };

  static setPackageJson = (PackageJson: { version: string }): void => {
    JscClient.PackageJson = PackageJson;
  };

  static generateAxiosConfig = (): AxiosRequestConfig => ({
    baseURL: JscClient.Config.JscClient.Host,
    timeout: JscClient.Config.JscClient.Timeout,
    validateStatus: (status: number) => status < 400,
    headers: {
      'X-JSC-APP-VERSION': `${JscClient.Config.AppName}-${JscClient.PackageJson.version}`,
      ...(Token.isLoggedIn() ? { 'X-JSC-TOKEN': Token.getToken() } : {}),
    },
  });
}
