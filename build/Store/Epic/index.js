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
exports.wrap = void 0;
var redux_observable_1 = require("redux-observable");
var App_1 = __importDefault(require("./App"));
var Configuration_1 = __importDefault(require("./Configuration"));
var Language_1 = __importDefault(require("./Language"));
var Login_1 = __importDefault(require("./Login"));
var Locale_1 = __importDefault(require("./Locale"));
var Session_1 = __importDefault(require("./Session"));
var System_1 = __importDefault(require("./System"));
var WebSocket_1 = __importDefault(require("./WebSocket"));
var Notification_1 = __importDefault(require("./Notification"));
var Selector = __importStar(require("../Selector/Core"));
var react_intl_1 = require("react-intl");
var cache = (0, react_intl_1.createIntlCache)();
var wrap = function (epic, wrapper) { return function (action$, state$, dependencies) {
    return wrapper(epic(action$, state$, __assign(__assign({}, dependencies), { intl: Selector.translationLanguage(state$.value) //.Core.Language.language
            ? (0, react_intl_1.createIntl)({
                locale: Selector.translationLanguage(state$.value),
                messages: Selector.translations(state$.value)[Selector.translationLanguage(state$.value)],
            }, cache)
            : null })));
}; };
exports.wrap = wrap;
var Core = (0, redux_observable_1.combineEpics)(App_1.default, Session_1.default, System_1.default, Login_1.default, Locale_1.default, Configuration_1.default, WebSocket_1.default, Language_1.default, Notification_1.default);
exports.default = Core;
