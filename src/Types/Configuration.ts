import { Language } from './Language';
import { NotificationPosition } from 'Types/Notification';
// import { agents } from 'clippyts'
export type ClippyConfiguration = {
  messages: String[];
  // defaultAgent?: AGENTS;
}

export type WebSocketClient = {
  Host: string;
  Path: string;
  PrivateNamespace: string;
  AutoRoomSubscriptions: string[];
};

export type Configuration = {
  RobotUsername: string;
  RobotPassword: string;
  AllowRobotLogin: boolean;
  Language: Language;
  Currency: string;
  ForceHTTPS: boolean;
  NotificationPosition: NotificationPosition;
  NotificationMax: number;
  AppName: string;
  JscClient: {
    Host: string;
    Timeout?: number;
  };
  JscWebSocketClient: WebSocketClient;
  JfsWebSocketClient: WebSocketClient;
  DebugMode?: boolean
  DebugCallstackLimit?: number
};
