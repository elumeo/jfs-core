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
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../../Action"));
var initialState = {
    publicKey: null,
    isCheckingLogin: false,
    failedLogins: 0,
};
var Login = (0, typesafe_actions_1.createReducer)(initialState)
    .handleAction(Action.checkLogin, function (state) { return (__assign(__assign({}, state), { isCheckingLogin: true })); })
    .handleAction(Action.loginFailed, function (state) { return (__assign(__assign({}, state), { failedLogins: state.failedLogins + 1, isCheckingLogin: false })); })
    .handleAction(Action.setPublicKey, function (state, action) { return (__assign(__assign({}, state), { publicKey: action.payload })); })
    .handleAction(Action.loggedIn, function (state) { return (__assign(__assign({}, state), { failedLogins: 0, isCheckingLogin: false, username: '', password: '' })); });
exports.default = Login;
