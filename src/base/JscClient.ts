import Session from './Session';
import IConfig from './IConfig';
import { version } from '../../package.json';

import { HttpClient } from './HttpClient';

export default class JscClient extends HttpClient {

  static Config: IConfig = {} as IConfig;

  static setConfig = Config => {
    JscClient.Config = Config;
    JscClient.setConfigGenerator(JscClient.generateAxiosConfig);
  };

  static generateAxiosConfig = () => ({
    baseURL: JscClient.Config.JscClient.Host,
    timeout: JscClient.Config.JscClient.Timeout,
    validateStatus: (status: number) => status < 400,
    headers: {
      'X-JSC-APP-VERSION': `${JscClient.Config.AppName}-${version}`,
      ...(
        Session.isLoggedIn()
          ? {'X-JSC-TOKEN': Session.getToken()}
          : {}
      )
    }
  })
}
