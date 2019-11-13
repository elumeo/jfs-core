import { createStandardAction } from 'typesafe-actions';

const featureName = 'websocket';

export const webSocketConnectRequestAction = createStandardAction(featureName + '/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createStandardAction(featureName + '/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createStandardAction(featureName + '/CONNECT_FAILED')();

export const webSocketJoinRoomRequestAction = createStandardAction(featureName + '/JOIN_ROOM_REQUEST')<string>();
export const webSocketJoinRoomSuccessAction = createStandardAction(featureName + '/JOIN_ROOM_SUCCESS')<string>();
export const webSocketJoinRoomFailedAction = createStandardAction(featureName + '/JOIN_ROOM_FAILED')();
