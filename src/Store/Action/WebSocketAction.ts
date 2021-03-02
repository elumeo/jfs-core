import { createStandardAction } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import { IWebSocketError, IWebSocketRoom, IWebSocketRoomConnection } from '../Reducer/Core/WebSocketConnectionReducer';

export const ROOM_UPDATE_ACTION_ID = 'websocket/UPDATE_ROOM';

export const webSocketAddNamespaceAction = createStandardAction('websocket/ADD_NAMESPACE')<string>();

export const webSocketConnectRequestAction = createStandardAction('websocket/CONNECT_REQUEST')<string>();
export const webSocketConnectSuccessAction = createStandardAction('websocket/CONNECT_SUCCESS')<string>();
export const webSocketConnectFailedAction = createStandardAction('websocket/CONNECT_FAILED')<IWebSocketError>();

export const webSocketDisconnectRequestAction = createStandardAction('websocket/DISCONNECT_REQUEST')<string>();
export const webSocketDisconnectSuccessAction = createStandardAction('websocket/DISCONNECT_SUCCESS')<string>();

export const webSocketJoinRoomRequestAction = createStandardAction('websocket/JOIN_ROOM_REQUEST')<IWebSocketRoom>();
export const webSocketJoinRoomLoadingAction = createStandardAction('websocket/JOIN_ROOM_LOADING')<IWebSocketRoomConnection>();
export const webSocketJoinRoomSuccessAction = createStandardAction('websocket/JOIN_ROOM_SUCCESS')<IWebSocketRoomConnection>();
export const webSocketJoinRoomFailureAction = createStandardAction('websocket/JOIN_ROOM_FAILURE')<IWebSocketRoomConnection>();

export const webSocketLeaveRoomRequestAction = createStandardAction('websocket/LEAVE_ROOM_REQUEST')<IWebSocketRoom>();
export const webSocketLeaveRoomSuccessAction = createStandardAction('websocket/LEAVE_ROOM_SUCCESS')<IWebSocketRoom>();

export const webSocketUpdateRoomAction = createStandardAction(ROOM_UPDATE_ACTION_ID)<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
