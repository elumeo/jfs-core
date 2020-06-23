import { createStandardAction } from 'typesafe-actions';
const featureName = 'websocket';
export const ROOM_UPDATE_ACTION_ID = featureName + '/UPDATE_ROOM';
export const webSocketAddNamespaceAction = createStandardAction(featureName + '/ADD_NAMESPACE')();
export const webSocketConnectRequestAction = createStandardAction(featureName + '/CONNECT_REQUEST')();
export const webSocketConnectSuccessAction = createStandardAction(featureName + '/CONNECT_SUCCESS')();
export const webSocketConnectFailedAction = createStandardAction(featureName + '/CONNECT_FAILED')();
export const webSocketDisconnectRequestAction = createStandardAction(featureName + '/DISCONNECT_REQUEST')();
export const webSocketDisconnectSuccessAction = createStandardAction(featureName + '/DISCONNECT_SUCCESS')();
export const webSocketJoinRoomRequestAction = createStandardAction(featureName + '/JOIN_ROOM_REQUEST')();
export const webSocketJoinRoomLoadingAction = createStandardAction(featureName + '/JOIN_ROOM_LOADING')();
export const webSocketJoinRoomSuccessAction = createStandardAction(featureName + '/JOIN_ROOM_SUCCESS')();
export const webSocketJoinRoomFailureAction = createStandardAction(featureName + '/JOIN_ROOM_FAILURE')();
export const webSocketLeaveRoomRequestAction = createStandardAction(featureName + '/LEAVE_ROOM_REQUEST')();
export const webSocketLeaveRoomSuccessAction = createStandardAction(featureName + '/LEAVE_ROOM_SUCCESS')();
export const webSocketUpdateRoomAction = createStandardAction(ROOM_UPDATE_ACTION_ID)();
//# sourceMappingURL=WebSocketAction.js.map