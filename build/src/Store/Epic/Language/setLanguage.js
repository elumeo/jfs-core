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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var js_cookie_1 = __importDefault(require("js-cookie"));
var Action = __importStar(require("../../../../Store/Action"));
var Locale = __importStar(require("../../../../Utilities/Format/Locale"));
var moment_1 = __importDefault(require("moment"));
var setLanguage = function (action$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.changeLanguageAction)), (0, operators_1.switchMap)(function (_a) {
        var payload = _a.payload;
        var locale = Locale.mapLanguageToLocale(payload);
        var expires = new Date();
        moment_1.default.locale(payload);
        expires.setFullYear(expires.getFullYear() + 100);
        js_cookie_1.default.set('lang', payload, {
            expires: expires,
        });
        Locale.setLocale(locale);
        // setDefaultLocale(payload);
        return rxjs_1.EMPTY;
    }));
};
exports.default = setLanguage;
