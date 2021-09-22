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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Action = __importStar(require("../../../../Store/Action"));
var TA = __importStar(require("typesafe-actions"));
var uuid_1 = require("uuid");
var initialState = {
    history: [],
    isHistoryOpen: false,
};
var Notification = TA.createReducer(initialState)
    .handleAction(Action.addNotification, function (state, action) {
    var _a, _b, _c, _d;
    return (__assign(__assign({}, state), { history: __spreadArray([
            __assign({ id: (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (0, uuid_1.v4)(), timeStamp: (_d = (_c = action.payload) === null || _c === void 0 ? void 0 : _c.timeStamp) !== null && _d !== void 0 ? _d : new Date() }, action.payload)
        ], state.history, true) }));
})
    .handleAction(Action.removeNotification, function (state, _a) {
    var id = _a.payload;
    return (__assign(__assign({}, state), { history: state.history.filter(function (notification) { return notification.id !== id; }) }));
})
    .handleAction(Action.removeAllNotifications, function (state) { return (__assign(__assign({}, state), { history: [] })); })
    .handleAction(Action.setIsNotificationHistoryOpen, function (state, _a) {
    var payload = _a.payload;
    return (__assign(__assign({}, state), { isHistoryOpen: payload }));
});
exports.default = Notification;
