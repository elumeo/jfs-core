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
var operators_1 = require("rxjs/operators");
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("../../Action"));
var logout = function (action$, state) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.logout)), 
    // filter(() => (state.value.configReducer.config.JscWebSocketClient !== undefined && state.value.configReducer.loaded)),
    (0, operators_1.switchMap)(function () {
        var disconnectRequestActions = [];
        var config = state.value.Core.Configuration.config;
        if (config.JscWebSocketClient !== undefined) {
            disconnectRequestActions.push(Action.webSocketDisconnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
        }
        if (config.JfsWebSocketClient !== undefined) {
            disconnectRequestActions.push(Action.webSocketDisconnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
        }
        return disconnectRequestActions;
        // return of(webSocketDisconnectRequestAction(WS_NAMESPACES.JSC2JFS), webSocketDisconnectRequestAction(WS_NAMESPACES.JFS2JFS))
    }));
};
exports.default = logout;
