import { Language } from "./Language";
export declare type WebSocketClient = {
    Host: string;
    Path: string;
    PrivateNamespace: string;
    AutoRoomSubscriptions: string[];
};
export declare type Configuration = {
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
    JscWebSocketClient: WebSocketClient;
    JfsWebSocketClient: WebSocketClient;
};
