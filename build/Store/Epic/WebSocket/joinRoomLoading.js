"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("../../Action"));
var WSClient_1 = require("../../../API/WS/WSClient");
var uuid_1 = require("uuid");
var joinRoomLoading = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.webSocketJoinRoomLoadingAction)), (0, operators_1.concatMap)(function (action) {
        return WSClient_1.WSClient.join(action.payload.namespace, action.payload.name).pipe((0, operators_1.map)(function (name) {
            var _a;
            var namespace = state$.value.Core.WebSocket[action.payload.namespace];
            var room = ((_a = namespace === null || namespace === void 0 ? void 0 : namespace.rooms) === null || _a === void 0 ? void 0 : _a.find(function (room) { return room.name === name; })) || null;
            room.isJoining = false;
            room.hasJoined = true;
            room.shouldJoin = false;
            return room;
        }), (0, operators_1.switchMap)(function (roomState) {
            return (0, rxjs_1.of)(Action.webSocketJoinRoomSuccessAction(roomState));
        }), (0, operators_1.catchError)(function (err) {
            var update = {
                name: action.payload.name,
                error: err.error.message,
                hasJoined: false,
                isJoining: false,
                shouldJoin: true,
                namespace: action.payload.namespace,
            };
            var error = {
                response: {
                    data: {
                        message: err.error.message,
                        id: 0,
                    },
                    headers: null,
                    config: err.error.config,
                    status: null,
                    statusText: err.error.message,
                },
                name: err.error.name,
                config: err.error.config,
                message: err.error.message,
                isAxiosError: true,
                toJSON: function () { return err.error.message; },
            };
            return (0, rxjs_1.of)(Action.webSocketJoinRoomFailureAction(update), Action.addNotification({
                id: (0, uuid_1.v4)(),
                title: 'Error',
                subtitle: 'Join Room (' + action.payload.name + ')',
                content: error.message,
                variant: 'error',
            }));
        }));
    }));
};
exports.default = joinRoomLoading;
