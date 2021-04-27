import JSCApi from 'API/JSC';
import * as Type from 'Types/WebSocket';
export declare const webSocketAddNamespaceAction: import("typesafe-actions").PayloadAC<"websocket/ADD_NAMESPACE", string>;
export declare const webSocketConnectRequestAction: import("typesafe-actions").PayloadAC<"websocket/CONNECT_REQUEST", string>;
export declare const webSocketConnectSuccessAction: import("typesafe-actions").PayloadAC<"websocket/CONNECT_SUCCESS", string>;
export declare const webSocketConnectFailedAction: import("typesafe-actions").PayloadAC<"websocket/CONNECT_FAILED", Type.IWebSocketError>;
export declare const webSocketDisconnectRequestAction: import("typesafe-actions").PayloadAC<"websocket/DISCONNECT_REQUEST", string>;
export declare const webSocketDisconnectSuccessAction: import("typesafe-actions").PayloadAC<"websocket/DISCONNECT_SUCCESS", string>;
export declare const webSocketJoinRoomRequestAction: import("typesafe-actions").PayloadAC<"websocket/JOIN_ROOM_REQUEST", Type.IWebSocketRoom<string>>;
export declare const webSocketJoinRoomLoadingAction: import("typesafe-actions").PayloadAC<"websocket/JOIN_ROOM_LOADING", Type.IWebSocketRoomConnection>;
export declare const webSocketJoinRoomSuccessAction: import("typesafe-actions").PayloadAC<"websocket/JOIN_ROOM_SUCCESS", Type.IWebSocketRoomConnection>;
export declare const webSocketJoinRoomFailureAction: import("typesafe-actions").PayloadAC<"websocket/JOIN_ROOM_FAILURE", Type.IWebSocketRoomConnection>;
export declare const webSocketLeaveRoomRequestAction: import("typesafe-actions").PayloadAC<"websocket/LEAVE_ROOM_REQUEST", Type.IWebSocketRoom<string>>;
export declare const webSocketLeaveRoomSuccessAction: import("typesafe-actions").PayloadAC<"websocket/LEAVE_ROOM_SUCCESS", Type.IWebSocketRoom<string>>;
export declare const webSocketUpdateRoomAction: import("typesafe-actions").PayloadAC<"websocket/UPDATE_ROOM", JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>;
