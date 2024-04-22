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
var UserConfig = __importStar(require("../../../API/LOCAL_STORAGE/UserConfig"));
var operators_1 = require("rxjs/operators");
var LocalStorage_action_1 = require("../../Action/LocalStorage.action");
var rxjs_1 = require("rxjs");
var typesafe_actions_1 = require("typesafe-actions");
var Action_1 = require("../../Action");
var save = function (action$, state$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)(Action_1.savePreferredThemeVariant)), (0, rxjs_1.filter)(function () { var _a, _b, _c, _d; return !!((_d = (_c = (_b = (_a = state$.value.Core) === null || _a === void 0 ? void 0 : _a.Session) === null || _b === void 0 ? void 0 : _b.sessionDTO) === null || _c === void 0 ? void 0 : _c.username) !== null && _d !== void 0 ? _d : ''); }), (0, operators_1.map)(function (_a) {
        var _b, _c, _d;
        var payload = _a.payload;
        return ({ userId: (_d = (_c = (_b = state$.value.Core) === null || _b === void 0 ? void 0 : _b.Session) === null || _c === void 0 ? void 0 : _c.sessionDTO) === null || _d === void 0 ? void 0 : _d.username, themeVariant: payload });
    }), (0, operators_1.switchMap)(function (_a) {
        var userId = _a.userId, themeVariant = _a.themeVariant;
        return [(0, LocalStorage_action_1.saveToLocalStorage)([userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR), themeVariant)];
    }));
};
exports.default = save;
