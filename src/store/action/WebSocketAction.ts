import { createStandardAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';

const featureName = 'websocket';

export const webSocketConnectRequestAction = createStandardAction(featureName + '/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createStandardAction(featureName + '/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createStandardAction(featureName + '/CONNECT_FAILED')();

export const webSocketJoinRoomRequestAction = createStandardAction(featureName + '/JOIN_ROOM_REQUEST')<string>();
export const webSocketJoinRoomSuccessAction = createStandardAction(featureName + '/JOIN_ROOM_SUCCESS')<string>();

export const webSocketLeaveRoomRequestAction = createStandardAction(featureName + '/LEAVE_ROOM_REQUEST')<string>();
export const webSocketLeaveRoomSuccessAction = createStandardAction(featureName + '/LEAVE_ROOM_SUCCESS')<string>();

export const webSocketUpdateRoomAction = createStandardAction(featureName + '/UPDATE_ROOM')<JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<any>>();
