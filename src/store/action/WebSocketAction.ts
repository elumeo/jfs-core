import { createStandardAction } from 'typesafe-actions';
import JSCApi from '../../JscApi';

export const webSocketConnectRequestAction = createStandardAction('websocket/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createStandardAction('websocket/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createStandardAction('websocket/CONNECT_FAILED')();

export const webSocketJoinRoomRequestAction = createStandardAction('websocket/JOIN_ROOM_REQUEST')<string>();
export const webSocketJoinRoomSuccessAction = createStandardAction('websocket/JOIN_ROOM_SUCCESS')<string>();
export const webSocketJoinRoomFailedAction = createStandardAction('websocket/JOIN_ROOM_FAILED')<string>();

export const webSocketLeaveRoomRequestAction = createStandardAction('websocket/LEAVE_ROOM_REQUEST')<string>();
export const webSocketLeaveRoomSuccessAction = createStandardAction('websocket/LEAVE_ROOM_SUCCESS')<string>();
export const webSocketLeaveRoomFailedAction = createStandardAction('websocket/LEAVE_ROOM_FAILED')<string>();

// export const webSocketRoomUpdateAction = createStandardAction('websocket/ROOM_UPDATE')<IWebSocketRoomData>();
