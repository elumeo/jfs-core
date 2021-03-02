import { State as WebSocketConnectionState, IWebSocketRoom, IWebSocketRoomConnection } from '../Reducer/Core/WebSocketConnectionReducer';
export declare const getRoomConnectionState: import("reselect").OutputParametricSelector<WebSocketConnectionState, IWebSocketRoom<string>, {
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
export declare const isWebSocketNamespaceConnectedState: import("reselect").OutputParametricSelector<WebSocketConnectionState, string, boolean, (res: boolean) => boolean>;
