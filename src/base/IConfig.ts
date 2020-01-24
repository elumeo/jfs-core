interface IWebSockClient {
  Host: string;
  PrivateNamespace: string;
  AutoRoomSubscriptions: string[];
}

interface IConfig {
  RobotUsername: string;
  RobotPassword: string;
  Language: string;
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
