import { createStandardAction } from 'typesafe-actions';

export const webSocketConnectRequestAction = createStandardAction('websocket/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createStandardAction('websocket/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createStandardAction('websocket/CONNECT_FAILED')();
