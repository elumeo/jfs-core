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
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("Store/Action"));
var appIsInitialized = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.authorizeSession)), (0, operators_1.filter)(function () {
        return state$.value.Core.Configuration.loaded &&
            state$.value.Core.Session.isAuthorized;
    }), (0, operators_1.switchMap)(function () {
        var actions = [];
        var config = state$.value.Core.Configuration.config;
        if (config.JscWebSocketClient !== undefined) {
            actions.push(Action.webSocketAddNamespaceAction(config.JscWebSocketClient.PrivateNamespace));
            actions.push(Action.webSocketConnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
        }
        if (config.JfsWebSocketClient !== undefined) {
            actions.push(Action.webSocketAddNamespaceAction(config.JfsWebSocketClient.PrivateNamespace));
            actions.push(Action.webSocketConnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
        }
        return actions;
    }));
};
exports.default = appIsInitialized;
