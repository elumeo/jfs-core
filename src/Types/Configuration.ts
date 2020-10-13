import { Language } from "./Language";

type IWebSockClient = {
  Host: string;
  Path: string;
  PrivateNamespace: string;
  AutoRoomSubscriptions: string[];
}

type IConfig = {
  RobotUsername: string;
  RobotPassword: string;
  Language: Language;
  Currency: string;
  ForceHTTPS: boolean;
  AppName: string;
  Client?: {
    Host?: string;
    Timeout?: number;
  };
  JscClient: {
    Host: string;
    Timeout?: number;
  };
  JscWebSocketClient: IWebSockClient;
  JfsWebSocketClient: IWebSockClient;
}

export default IConfig;
