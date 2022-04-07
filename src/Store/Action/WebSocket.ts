import { createAction } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import * as Type from 'Types/WebSocket';
import { ROOM_UPDATE_ACTION_ID } from 'Constant/WebSocket';

export const webSocketAddNamespaceAction = createAction(
  'websocket/ADD_NAMESPACE',
)<string>();

export const webSocketConnectRequestAction = createAction(
  'websocket/CONNECT_REQUEST',
)<string>();
export const webSocketConnectSuccessAction = createAction(
  'websocket/CONNECT_SUCCESS',
)<string>();
export const webSocketConnectFailedAction = createAction(
  'websocket/CONNECT_FAILED',
)<Type.IWebSocketError>();
export const webSocketReconnectAction = createAction(
  'websocket/PREPARE_RECONNECT',
)<string>();

export const webSocketDisconnectRequestAction = createAction(
  'websocket/DISCONNECT_REQUEST',
)<string>();
export const webSocketDisconnectSuccessAction = createAction(
  'websocket/DISCONNECT_SUCCESS',
)<string>();

export const webSocketJoinRoomRequestAction = createAction(
  'websocket/JOIN_ROOM_REQUEST',
)<Type.IWebSocketRoom>();
export const webSocketJoinRoomLoadingAction = createAction(
  'websocket/JOIN_ROOM_LOADING',
)<Type.IWebSocketRoomConnection>();
export const webSocketJoinRoomSuccessAction = createAction(
  'websocket/JOIN_ROOM_SUCCESS',
)<Type.IWebSocketRoomConnection>();
export const webSocketJoinRoomFailureAction = createAction(
  'websocket/JOIN_ROOM_FAILURE',
)<Type.IWebSocketRoomConnection>();

export const webSocketLeaveRoomRequestAction = createAction(
  'websocket/LEAVE_ROOM_REQUEST',
)<Type.IWebSocketRoom>();
export const webSocketLeaveRoomSuccessAction = createAction(
  'websocket/LEAVE_ROOM_SUCCESS',
)<Type.IWebSocketRoom>();

export const webSocketUpdateRoomAction = createAction(ROOM_UPDATE_ACTION_ID)<
  JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<unknown>
>();
