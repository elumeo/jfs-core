import { createAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';

const featureName = 'websocket';

export const webSocketConnectRequestAction = createAction(featureName + '/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createAction(featureName + '/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createAction(featureName + '/CONNECT_FAILED')();

export const webSocketJoinRoomRequestAction = createAction(featureName + '/JOIN_ROOM_REQUEST')<string>();
export const webSocketJoinRoomSuccessAction = createAction(featureName + '/JOIN_ROOM_SUCCESS')<string>();

export const webSocketLeaveRoomRequestAction = createAction(featureName + '/LEAVE_ROOM_REQUEST')<string>();
export const webSocketLeaveRoomSuccessAction = createAction(featureName + '/LEAVE_ROOM_SUCCESS')<string>();

export const webSocketUpdateRoomAction = createAction(featureName + '/UPDATE_ROOM')<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
