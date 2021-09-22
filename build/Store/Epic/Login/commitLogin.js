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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var rxjs_1 = require("rxjs");
var JSC_1 = __importDefault(require("../../../API/JSC"));
var Action = __importStar(require("../../Action"));
var Token = __importStar(require("../../../API/LOCAL_STORAGE/Token"));
var commitLogin = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.checkLogin)), (0, operators_1.switchMap)(function (action) {
        return (0, rxjs_1.from)(JSC_1.default.LoginClient.loginFrontend(state$.value.Core.Configuration.config.AppName, {
            username: action.payload.username,
            password: action.payload.password,
        })).pipe((0, operators_1.switchMap)(function (response) {
            Token.setToken(response.data.session.token);
            return [
                Action.authorizeSession({ frontendSessionDTO: response.data }),
                Action.loggedIn(),
            ];
        }), (0, operators_1.catchError)(function (error) {
            var _a, _b, _c;
            var contentTranslationId = 'login.failed';
            if (((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id) === 'authorizationRequired') {
                contentTranslationId = 'userRights.checkFailed';
            }
            var actionsToReturn = [];
            actionsToReturn.push(Action.loginFailed());
            actionsToReturn.push(Action.addToastAction({
                contentTranslationId: contentTranslationId,
                isError: true
            }));
            if (((_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.status) !== 401) {
                actionsToReturn.push(Action.addErrorNotification(error));
            }
            return actionsToReturn;
        }));
    }));
};
exports.default = commitLogin;
