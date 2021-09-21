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
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../../Action"));
var initialState = {
    toasts: [],
};
var equal = function (first, second) {
    return (first.contentMessage !== undefined &&
        first.contentMessage === second.contentMessage) ||
        (first.contentTranslationId !== undefined &&
            first.contentTranslationId === second.contentTranslationId) ||
        (first.contentError !== undefined &&
            second.contentError !== undefined &&
            first.contentError.toString() === second.contentError.toString());
};
var Toast = (0, typesafe_actions_1.createReducer)(initialState)
    .handleAction(Action.addToastAction, function (state, action) { return (__assign(__assign({}, state), { toasts: state.toasts.some(function (toast) { return equal(toast, action.payload); })
        ? state.toasts
        : __spreadArray([action.payload], state.toasts, true) })); })
    .handleAction(Action.dismissToastAction, function (state) { return (__assign(__assign({}, state), { toasts: state.toasts.length ? state.toasts.slice(1) : [] })); });
exports.default = Toast;
