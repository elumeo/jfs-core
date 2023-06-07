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
exports.checkForReconnect = void 0;
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("../../Action"));
var WSClient_1 = require("../../../API/WS/WSClient");
var checkForReconnect = function (action$) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.webSocketConnectRequestAction)), (0, operators_1.concatMap)(function () { return WSClient_1.WSClient.reconnectObservable$; }), (0, operators_1.switchMap)(function (namespace) { return (0, rxjs_1.of)(Action.webSocketReconnectAction(namespace)); }));
};
exports.checkForReconnect = checkForReconnect;
exports.default = exports.checkForReconnect;
