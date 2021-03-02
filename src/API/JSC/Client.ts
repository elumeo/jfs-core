import * as Token from '../LOCAL_STORAGE/Token';
import IConfig from 'Types/Configuration';

import { HttpClient } from 'API/HTTP/HttpClient';

export default class JscClient extends HttpClient {

  static Config: IConfig = {} as IConfig;
  static PackageJson: { version: string } = {} as { version: string }; 

  static setConfig = Config => {
    JscClient.Config = Config;
    JscClient.setConfigGenerator(JscClient.generateAxiosConfig);
  };

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
        Token.isLoggedIn()
          ? {'X-JSC-TOKEN': Token.getToken()}
          : {}
      )
    }
  })
}
