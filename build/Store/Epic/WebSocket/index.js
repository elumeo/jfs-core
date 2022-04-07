"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var appIsInitialized_1 = __importDefault(require("./appIsInitialized"));
var connectRequest_1 = __importDefault(require("./connectRequest"));
var logout_1 = __importDefault(require("./logout"));
var checkForConnectionError_1 = __importDefault(require("./checkForConnectionError"));
var checkForReconnect_1 = __importDefault(require("./checkForReconnect"));
var connectSuccess_1 = __importDefault(require("./connectSuccess"));
var disconnectRequest_1 = __importDefault(require("./disconnectRequest"));
var joinRoomRequest_1 = __importDefault(require("./joinRoomRequest"));
var joinRoomLoading_1 = __importDefault(require("./joinRoomLoading"));
var leaveRoomRequest_1 = __importDefault(require("./leaveRoomRequest"));
var reconnect_1 = __importDefault(require("../../Epic/WebSocket/reconnect"));
exports.default = (0, redux_observable_1.combineEpics)(appIsInitialized_1.default, connectRequest_1.default, connectSuccess_1.default, checkForConnectionError_1.default, checkForReconnect_1.default, reconnect_1.default, disconnectRequest_1.default, joinRoomLoading_1.default, joinRoomRequest_1.default, leaveRoomRequest_1.default, logout_1.default);
