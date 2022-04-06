"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../../Action"));
/**
 * It is not possible to set initial state values for any namespace here
 * because namespaces will be create dynamically with the action:
 * webSocketAddNamespaceAction
 */
exports.initialState = {};
var WebSocket = (0, typesafe_actions_1.createReducer)(exports.initialState)
    .handleAction(Action.webSocketConnectRequestAction, function (state, action) {
    var _a;
    return (__assign(__assign({}, state), (_a = {}, _a[action.payload] = __assign(__assign({}, state[action.payload]), { isConnecting: true, isConnected: false, connectionError: null }), _a)));
})
    .handleAction(Action.webSocketConnectSuccessAction, function (state, action) {
    var _a;
    return (__assign(__assign({}, state), (_a = {}, _a[action.payload] = __assign(__assign({}, state[action.payload]), { isConnecting: false, isConnected: true, connectionError: null }), _a)));
})
    .handleAction(Action.webSocketConnectFailedAction, function (state, action) {
    var _a;
    return (__assign(__assign({}, state), (_a = {}, _a[action.payload.namespace] = __assign(__assign({}, state[action.payload.namespace]), { isConnecting: false, isConnected: false, connectionError: action.payload.message }), _a)));
})
    .handleAction(Action.webSocketDisconnectSuccessAction, function (state, action) {
    var _a;
    return (__assign(__assign({}, state), (_a = {}, _a[action.payload] = __assign(__assign({}, state[action.payload]), { isConnecting: false, isConnected: false, connectionError: null, rooms: [] }), _a)));
})
    .handleAction([
    Action.webSocketJoinRoomLoadingAction,
    Action.webSocketJoinRoomSuccessAction,
    Action.webSocketJoinRoomFailureAction,
], function (state, action) {
    var _a;
    var newRooms = [];
    if (state[action.payload.namespace] !== undefined) {
        for (var _i = 0, _b = state[action.payload.namespace].rooms; _i < _b.length; _i++) {
            var room = _b[_i];
            if (room.name !== action.payload.name) {
                newRooms.push(__assign({}, room));
            }
        }
    }
    newRooms.push(action.payload);
    return __assign(__assign({}, state), (_a = {}, _a[action.payload.namespace] = __assign(__assign({}, state[action.payload.namespace]), { rooms: newRooms }), _a));
})
    .handleAction(Action.webSocketLeaveRoomSuccessAction, function (state, action) {
    var _a;
    var newRooms = [];
    for (var _i = 0, _b = state[action.payload.namespace].rooms; _i < _b.length; _i++) {
        var room = _b[_i];
        if (room.name !== action.payload.room) {
            newRooms.push(__assign({}, room));
        }
        else {
            var newRoom = __assign({}, room);
            newRoom.hasJoined = false;
            newRoom.isJoining = false;
            newRooms.push(newRoom);
        }
    }
    return __assign(__assign({}, state), (_a = {}, _a[action.payload.namespace] = __assign(__assign({}, state[action.payload.namespace]), { rooms: newRooms }), _a));
})
    .handleAction(Action.webSocketAddNamespaceAction, function (state, action) {
    var _a;
    return (__assign(__assign({}, state), (_a = {}, _a[action.payload] = {
        isConnected: false,
        isConnecting: false,
        connectionError: null,
        rooms: [],
    }, _a)));
});
exports.default = WebSocket;
