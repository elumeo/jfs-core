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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var notistack = __importStar(require("notistack"));
var Button = __importStar(require("./Button"));
var Redux_1 = require("../../Types/Redux");
var Card_1 = __importDefault(require("./Card"));
var Notistack = function () {
    var all = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    var isHistoryOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.isHistoryOpen; });
    var NotificationMax = (0, Redux_1.useSelector)(function (state) { return state.Core.Configuration.config.NotificationMax; });
    var _a = react_1.default.useState([]), shown = _a[0], setShown = _a[1];
    var snackbar = notistack.useSnackbar();
    react_1.default.useEffect(function () {
        var missing = lodash_1.default.differenceBy(all, shown, 'id');
        var deleted = lodash_1.default.differenceBy(shown, all, 'id');
        var persistentShown = shown.filter(function (n) { var _a; return (_a = n.notistackOptions) === null || _a === void 0 ? void 0 : _a.persist; });
        var requiredDismissCount = Math.max(0, persistentShown.length + missing.length - NotificationMax);
        for (var i = 0; i < requiredDismissCount; i++) {
            var notification = persistentShown.shift();
            notification.notistackOptions.persist = false;
            snackbar.closeSnackbar(notification.id);
        }
        deleted.forEach(function (notification) {
            snackbar.closeSnackbar(notification.id);
        });
        if (!isHistoryOpen) {
            missing.forEach(function (notification) {
                var action = function (snackbar, id, temporary) { return (react_1.default.createElement(react_1.default.Fragment, null,
                    temporary && react_1.default.createElement(Button.Dismiss, { onClick: function () { return snackbar.closeSnackbar(notification.id); } }),
                    notification.action && notification.action(snackbar, notification.id, true))); };
                snackbar.enqueueSnackbar(react_1.default.createElement(Card_1.default, { key: notification.id, notification: __assign(__assign({}, notification), { action: action }), temporary: true }), __assign(__assign({}, notification.notistackOptions), { key: notification.id }));
            });
        }
        if (missing.length) {
            setShown(__spreadArray(__spreadArray([], shown, true), missing, true));
        }
    }, [all]);
    return null;
};
exports.default = Notistack;
