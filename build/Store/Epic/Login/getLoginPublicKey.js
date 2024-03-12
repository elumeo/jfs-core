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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var rxjs_1 = require("rxjs");
var JSC_1 = __importDefault(require("../../../API/JSC"));
var Action = __importStar(require("../../Action"));
var getLoginPublicKey = function (action$) { return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.configLoadedAction)), (0, operators_1.switchMap)(function () { return (0, rxjs_1.from)(JSC_1.default.LoginClient.getLoginPublicKey()).pipe((0, operators_1.switchMap)(function (response) { return [Action.setPublicKey(response.data.publicKey)]; }), (0, operators_1.catchError)(function (error) { return [Action.addErrorNotification(error)]; })); })); };
exports.default = getLoginPublicKey;
