import { createStandardAction } from 'typesafe-actions';
import { ROOM_UPDATE_ACTION_ID } from '../../Constant/WebSocket';
export const webSocketAddNamespaceAction = createStandardAction('websocket/ADD_NAMESPACE')();
export const webSocketConnectRequestAction = createStandardAction('websocket/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createStandardAction('websocket/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createStandardAction('websocket/CONNECT_FAILED')();
export const webSocketDisconnectRequestAction = createStandardAction('websocket/DISCONNECT_REQUEST')();
export const webSocketDisconnectSuccessAction = createStandardAction('websocket/DISCONNECT_SUCCESS')();
export const webSocketJoinRoomRequestAction = createStandardAction('websocket/JOIN_ROOM_REQUEST')();
export const webSocketJoinRoomLoadingAction = createStandardAction('websocket/JOIN_ROOM_LOADING')();
export const webSocketJoinRoomSuccessAction = createStandardAction('websocket/JOIN_ROOM_SUCCESS')();
export const webSocketJoinRoomFailureAction = createStandardAction('websocket/JOIN_ROOM_FAILURE')();
export const webSocketLeaveRoomRequestAction = createStandardAction('websocket/LEAVE_ROOM_REQUEST')();
export const webSocketLeaveRoomSuccessAction = createStandardAction('websocket/LEAVE_ROOM_SUCCESS')();
export const webSocketUpdateRoomAction = createStandardAction(ROOM_UPDATE_ACTION_ID)();
//# sourceMappingURL=WebSocket.js.map