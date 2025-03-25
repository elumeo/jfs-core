import { Language } from './Language';
import { NotificationPosition } from './Notification';
import { ThemeVariant } from "./ThemeVariant.type";
export type ClippyConfiguration = {
    messages?: string[];
    interval?: number;
    enabled?: boolean;
};
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
    DebugMode?: boolean;
    DebugCallstackLimit?: number;
    ClippyConfig?: ClippyConfiguration;
    DefaultTheme?: ThemeVariant;
};
