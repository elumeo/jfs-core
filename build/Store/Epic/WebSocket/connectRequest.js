"use strict";
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
exports.connectRequest = void 0;
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("../../Action"));
var WSClient_1 = require("../../../API/WS/WSClient");
var connectRequest = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.webSocketConnectRequestAction)), (0, operators_1.filter)(function () {
        return state$.value.Core.Configuration.loaded &&
            state$.value.Core.Session.isAuthorized;
    }), (0, operators_1.concatMap)(function (action) {
        return WSClient_1.WSClient.leaveAllRooms(action.payload, state$.value.Core.WebSocket[action.payload].rooms);
    }), (0, operators_1.concatMap)(function (namespace) { return WSClient_1.WSClient.disconnect(namespace); }), (0, operators_1.concatMap)(function (namespace) {
        var host = null;
        var config = state$.value.Core.Configuration.config;
        var path = '/socket.io';
        if (config.JscWebSocketClient !== undefined &&
            namespace === config.JscWebSocketClient.PrivateNamespace) {
            host = config.JscWebSocketClient.Host;
            path =
                config.JscWebSocketClient.Path !== undefined &&
                    config.JscWebSocketClient.Path !== null
                    ? config.JscWebSocketClient.Path + path
                    : path;
        }
        else if (config.JfsWebSocketClient !== undefined &&
            namespace === config.JfsWebSocketClient.PrivateNamespace) {
            host = config.JfsWebSocketClient.Host;
            path =
                config.JfsWebSocketClient.Path !== undefined &&
                    config.JfsWebSocketClient.Path !== null
                    ? config.JfsWebSocketClient.Path + path
                    : path;
        }
        if (host === null) {
            return rxjs_1.EMPTY;
        }
        return WSClient_1.WSClient.connect(host, path, namespace, state$.value.Core.Session.sessionDTO.token, state$.value.Core.Session.sessionDTO.lastIPAddress, state$.value.Core.Session.sessionDTO.username, state$.value.Core.Configuration.config.AppName);
    }), (0, operators_1.switchMap)(function (namespace) { return (0, rxjs_1.of)(Action.webSocketConnectSuccessAction(namespace)); }));
};
exports.connectRequest = connectRequest;
exports.default = exports.connectRequest;
