"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webSocketUpdateRoomAction = exports.webSocketLeaveRoomSuccessAction = exports.webSocketLeaveRoomRequestAction = exports.webSocketJoinRoomFailureAction = exports.webSocketJoinRoomSuccessAction = exports.webSocketJoinRoomLoadingAction = exports.webSocketJoinRoomRequestAction = exports.webSocketDisconnectSuccessAction = exports.webSocketDisconnectRequestAction = exports.webSocketConnectFailedAction = exports.webSocketConnectSuccessAction = exports.webSocketConnectRequestAction = exports.webSocketAddNamespaceAction = void 0;
var typesafe_actions_1 = require("typesafe-actions");
var WebSocket_1 = require("../../../Constant/WebSocket");
exports.webSocketAddNamespaceAction = (0, typesafe_actions_1.createAction)('websocket/ADD_NAMESPACE')();
exports.webSocketConnectRequestAction = (0, typesafe_actions_1.createAction)('websocket/CONNECT_REQUEST')();
exports.webSocketConnectSuccessAction = (0, typesafe_actions_1.createAction)('websocket/CONNECT_SUCCESS')();
exports.webSocketConnectFailedAction = (0, typesafe_actions_1.createAction)('websocket/CONNECT_FAILED')();
exports.webSocketDisconnectRequestAction = (0, typesafe_actions_1.createAction)('websocket/DISCONNECT_REQUEST')();
exports.webSocketDisconnectSuccessAction = (0, typesafe_actions_1.createAction)('websocket/DISCONNECT_SUCCESS')();
exports.webSocketJoinRoomRequestAction = (0, typesafe_actions_1.createAction)('websocket/JOIN_ROOM_REQUEST')();
exports.webSocketJoinRoomLoadingAction = (0, typesafe_actions_1.createAction)('websocket/JOIN_ROOM_LOADING')();
exports.webSocketJoinRoomSuccessAction = (0, typesafe_actions_1.createAction)('websocket/JOIN_ROOM_SUCCESS')();
exports.webSocketJoinRoomFailureAction = (0, typesafe_actions_1.createAction)('websocket/JOIN_ROOM_FAILURE')();
exports.webSocketLeaveRoomRequestAction = (0, typesafe_actions_1.createAction)('websocket/LEAVE_ROOM_REQUEST')();
exports.webSocketLeaveRoomSuccessAction = (0, typesafe_actions_1.createAction)('websocket/LEAVE_ROOM_SUCCESS')();
exports.webSocketUpdateRoomAction = (0, typesafe_actions_1.createAction)(WebSocket_1.ROOM_UPDATE_ACTION_ID)();
