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
var typesafe_actions_1 = require("typesafe-actions");
var rxjs_1 = require("rxjs");
var Action = __importStar(require("../../Action"));
var Token = __importStar(require("../../../API/LOCAL_STORAGE/Token"));
var loadSession = function (action$, store) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.loadSession)), (0, operators_1.map)(function () {
        var _a;
        var _b = (_a = store.value.Core.Configuration.config) !== null && _a !== void 0 ? _a : {}, username = _b.RobotUsername, password = _b.RobotPassword, allowRobotLogin = _b.AllowRobotLogin;
        return [allowRobotLogin, { username: username, password: password }];
    }), (0, operators_1.switchMap)(function (_a) {
        var allowRobotLogin = _a[0], _b = _a[1], username = _b.username, password = _b.password;
        return (0, rxjs_1.of)(Token.getToken() || (allowRobotLogin && username && password)
            ? Token.getToken()
                ? Action.checkSession()
                : Action.checkLogin({ username: username, password: password })
            : Action.unauthorizeSession());
    }));
};
exports.default = loadSession;
