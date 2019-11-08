interface IConfig {
  RobotUsername: string;
  RobotPassword: string;
  Language: string;
  Currency: string;
  ForceHTTPS: boolean;
  pending: boolean;
  loaded: boolean;
  Client?: {
    Host?: string;
    Timeout?: number;
  };
  JscClient: {
    Host: string;
  };
  WebSocketClient: {
    Host: string;
    PrivateNamespace: string;
    AutoJoinRooms: string[];
  };
}

export default IConfig;
