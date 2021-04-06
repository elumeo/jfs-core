import { createStandardAction } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import * as Type from 'Types/WebSocket';
import { ROOM_UPDATE_ACTION_ID } from 'Constant/WebSocket';

export const webSocketAddNamespaceAction = createStandardAction('websocket/ADD_NAMESPACE')<string>();

export const webSocketConnectRequestAction = createStandardAction('websocket/CONNECT_REQUEST')<string>();
export const webSocketConnectSuccessAction = createStandardAction('websocket/CONNECT_SUCCESS')<string>();
export const webSocketConnectFailedAction = createStandardAction('websocket/CONNECT_FAILED')<Type.IWebSocketError>();

export const webSocketDisconnectRequestAction = createStandardAction('websocket/DISCONNECT_REQUEST')<string>();
export const webSocketDisconnectSuccessAction = createStandardAction('websocket/DISCONNECT_SUCCESS')<string>();

export const webSocketJoinRoomRequestAction = createStandardAction('websocket/JOIN_ROOM_REQUEST')<Type.IWebSocketRoom>();
export const webSocketJoinRoomLoadingAction = createStandardAction('websocket/JOIN_ROOM_LOADING')<Type.IWebSocketRoomConnection>();
export const webSocketJoinRoomSuccessAction = createStandardAction('websocket/JOIN_ROOM_SUCCESS')<Type.IWebSocketRoomConnection>();
export const webSocketJoinRoomFailureAction = createStandardAction('websocket/JOIN_ROOM_FAILURE')<Type.IWebSocketRoomConnection>();

export const webSocketLeaveRoomRequestAction = createStandardAction('websocket/LEAVE_ROOM_REQUEST')<Type.IWebSocketRoom>();
export const webSocketLeaveRoomSuccessAction = createStandardAction('websocket/LEAVE_ROOM_SUCCESS')<Type.IWebSocketRoom>();

export const webSocketUpdateRoomAction = createStandardAction(ROOM_UPDATE_ACTION_ID)<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
