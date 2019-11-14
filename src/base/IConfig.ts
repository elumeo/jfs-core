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
  WebSocketClient: {
    Host: string;
    PrivateNamespace: string;
    AutoJoinRooms: string[];
  };
}

export default IConfig;
