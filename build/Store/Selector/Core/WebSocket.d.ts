import * as Type from '../../../Types/WebSocket';
import { State as WebSocketConnectionState } from '../../Reducer/Core/WebSocket';
export declare const getRoomConnectionState: import("reselect").OutputParametricSelector<WebSocketConnectionState, Type.IWebSocketRoom<string>, {
    namespace: string;
    isJoining: boolean;
    hasJoined: boolean;
    name: string;
    error: string;
}, (res: Type.IWebSocketRoomConnection) => {
    namespace: string;
    isJoining: boolean;
    hasJoined: boolean;
    name: string;
    error: string;
}>;
export declare const isWebSocketNamespaceConnectedState: import("reselect").OutputParametricSelector<WebSocketConnectionState, string, boolean, (res: boolean) => boolean>;
