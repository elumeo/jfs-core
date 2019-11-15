import Session from './Session';
import IConfig from './IConfig';

import { HttpClient } from './HttpClient';

export default class JscClient extends HttpClient {

  static Config: IConfig = {} as IConfig;
  static PackageJson: { version: string } = {} as { version: string };

  static setConfig = Config => {
    JscClient.Config = Config;
    JscClient.setConfigGenerator(JscClient.generateAxiosConfig);
  }

  static setPackageJson = PackageJson => {
    JscClient.PackageJson = PackageJson;
  }

  static generateAxiosConfig = () => ({
    baseURL: JscClient.Config.JscClient.Host,
    timeout: JscClient.Config.JscClient.Timeout,
    validateStatus: (status: number) => status < 400,
    headers: {
      'X-JSC-APP-VERSION': `${JscClient.Config.AppName}-${JscClient.PackageJson.version}`,
      ...(
        Session.isLoggedIn()
          ? { 'X-JSC-TOKEN': Session.getToken() }
          : {}
      )
    }
  })
}
