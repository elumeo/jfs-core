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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrap = void 0;
var redux_observable_1 = require("redux-observable");
var App_1 = __importDefault(require("./App"));
var Configuration_1 = __importDefault(require("./Configuration"));
var Debug_1 = __importDefault(require("./Debug"));
var Language_1 = __importDefault(require("./Language"));
var Login_1 = __importDefault(require("./Login"));
var Locale_1 = __importDefault(require("./Locale"));
var Session_1 = __importDefault(require("./Session"));
var System_1 = __importDefault(require("./System"));
var WebSocket_1 = __importDefault(require("./WebSocket"));
var Notification_1 = __importDefault(require("./Notification"));
var react_intl_1 = require("react-intl");
var cache = (0, react_intl_1.createIntlCache)();
var wrap = function (epic, wrapper) { return function (action$, state$, dependencies) {
    return wrapper(epic(action$, state$, __assign(__assign({}, dependencies), { intl: function () {
            return state$.value.Core.Language.language
                ? (0, react_intl_1.createIntl)({
                    locale: state$.value.Core.Language.language,
                    messages: state$.value.Core.Language.messages[state$.value.Core.Language.language],
                }, cache)
                : null;
        } })));
}; };
exports.wrap = wrap;
var Core = (0, redux_observable_1.combineEpics)(App_1.default, Session_1.default, System_1.default, Login_1.default, Locale_1.default, Configuration_1.default, WebSocket_1.default, Language_1.default, Notification_1.default, Debug_1.default);
exports.default = Core;
