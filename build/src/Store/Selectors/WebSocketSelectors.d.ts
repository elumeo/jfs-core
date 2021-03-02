import WebSocketConnection, { IWebSocketRoom, IWebSocketRoomConnection } from '../Reducer/Core/WebSocketConnectionReducer';
export declare const getRoomConnectionState: import("reselect").OutputParametricSelector<WebSocketConnection.State, IWebSocketRoom<string>, {
    namespace: string;
    isJoining: boolean;
    hasJoined: boolean;
    name: string;
    error: string;
}, (res: IWebSocketRoomConnection) => {
    namespace: string;
    isJoining: boolean;
    hasJoined: boolean;
    name: string;
    error: string;
}>;
export declare const isWebSocketNamespaceConnectedState: import("reselect").OutputParametricSelector<WebSocketConnection.State, string, boolean, (res: boolean) => boolean>;
