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
var Action = __importStar(require("../../Action"));
var JSC_1 = __importDefault(require("../../../API/JSC"));
var toastableErrorIds = ['authorizationRequired', 'invalidSession'];
var checkSession = function (action$, store) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.checkSession)), (0, operators_1.concatMap)(function () {
        return (0, rxjs_1.from)(JSC_1.default.SessionClient.getCurrentSessionFrontend(store.value.Core.Configuration.config.AppName)).pipe((0, operators_1.switchMap)(function (response) {
            return (0, rxjs_1.of)(Action.authorizeSession({ frontendSessionDTO: response.data }));
        }));
    }), (0, operators_1.catchError)(function (error) {
        var isToastable = toastableErrorIds.find(function (id) { var _a; return id === ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.id); });
        return (0, rxjs_1.concat)(isToastable
            ? (0, rxjs_1.of)(Action.addToastAction({
                contentTranslationId: isToastable
                    ? error.response.id === 'authorizationRequired'
                        ? 'userRights.checkFailed'
                        : 'session.expired'
                    : null,
                isError: true,
            }))
            : rxjs_1.EMPTY, (0, rxjs_1.of)(Action.unauthorizeSession()));
    }));
};
exports.default = checkSession;
