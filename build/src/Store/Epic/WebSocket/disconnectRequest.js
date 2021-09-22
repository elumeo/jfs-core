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
var rxjs_1 = require("rxjs");
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("../../../../Store/Action"));
var WSClient_1 = require("../../../../API/WS/WSClient");
var disconnectRequest = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.webSocketDisconnectRequestAction)), (0, operators_1.filter)(function (action) { return Boolean(state$.value.Core.WebSocket[action.payload]); }), (0, operators_1.concatMap)(function (action) {
        return WSClient_1.WSClient.leaveAllRooms(action.payload, state$.value.Core.WebSocket[action.payload].rooms);
    }), (0, operators_1.concatMap)(function (namespace) { return WSClient_1.WSClient.disconnect(namespace); }), (0, operators_1.switchMap)(function (namespace) {
        return (0, rxjs_1.of)(Action.webSocketDisconnectSuccessAction(namespace));
    }));
};
exports.default = disconnectRequest;
