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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../../Action"));
/**
 * It is not possible to set initial state values for any namespace here
 * because namespaces will be created dynamically with the action:
 * webSocketAddNamespaceAction
 */
exports.initialState = {};
var WebSocket = (0, typesafe_actions_1.createReducer)(exports.initialState)
    .handleAction(Action.webSocketConnectRequestAction, function (state, _a) {
    var _b;
    var namespace = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[namespace] = __assign(__assign({}, state[namespace]), { isConnecting: true, isConnected: false, connectionError: null }), _b)));
})
    .handleAction(Action.webSocketConnectSuccessAction, function (state, _a) {
    var _b;
    var namespace = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[namespace] = __assign(__assign({}, state[namespace]), { isConnecting: false, isConnected: true, connectionError: null }), _b)));
})
    .handleAction(Action.webSocketConnectFailedAction, function (state, _a) {
    var _b;
    var room = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[room.namespace] = __assign(__assign({}, state[room.namespace]), { isConnecting: false, isConnected: false, connectionError: room.message }), _b)));
})
    .handleAction(Action.webSocketReconnectAction, function (state, _a) {
    var _b;
    var _c;
    var namespace = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[namespace] = __assign(__assign({}, state[namespace]), { rooms: (((_c = state[namespace]) === null || _c === void 0 ? void 0 : _c.rooms) || [])
            .map(function (r) { return (__assign(__assign({}, r), { shouldJoin: r.isJoining || r.hasJoined, isJoining: false, hasJoined: false })); }) }), _b)));
})
    .handleAction(Action.webSocketDisconnectSuccessAction, function (state, _a) {
    var _b;
    var namespace = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[namespace] = __assign(__assign({}, state[namespace]), { isConnecting: false, isConnected: false, connectionError: null, rooms: [] }), _b)));
})
    .handleAction([
    Action.webSocketJoinRoomLoadingAction,
    Action.webSocketJoinRoomSuccessAction,
    Action.webSocketJoinRoomFailureAction
], function (state, _a) {
    var _b;
    var _c;
    var room = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[room.namespace] = __assign(__assign({}, state[room.namespace]), { rooms: __spreadArray(__spreadArray([], (((_c = state === null || state === void 0 ? void 0 : state[room.namespace]) === null || _c === void 0 ? void 0 : _c.rooms) || []).filter(function (r) { return r.name !== room.name; }), true), [
            room
        ], false) }), _b)));
})
    .handleAction(Action.webSocketLeaveRoomSuccessAction, function (state, _a) {
    var _b;
    var _c;
    var room = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[room.namespace] = __assign(__assign({}, state[room.namespace]), { rooms: (((_c = state[room.namespace]) === null || _c === void 0 ? void 0 : _c.rooms) || [])
            .map(function (r) {
            return r.name == room.room
                ? __assign(__assign({}, r), { hasJoined: false, isJoining: false }) : r;
        }) }), _b)));
})
    .handleAction(Action.webSocketAddNamespaceAction, function (state, _a) {
    var _b;
    var namespace = _a.payload;
    return (__assign(__assign({}, state), (_b = {}, _b[namespace] = {
        isConnected: false,
        isConnecting: false,
        connectionError: null,
        rooms: []
    }, _b)));
});
exports.default = WebSocket;
