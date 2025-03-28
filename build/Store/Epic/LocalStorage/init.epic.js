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
Object.defineProperty(exports, "__esModule", { value: true });
var Session = __importStar(require("../../../API/LOCAL_STORAGE/Session"));
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../../Action"));
var rxjs_1 = require("rxjs");
var init = function (action$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.configLoadedAction)), (0, operators_1.mergeMap)(function () {
        return (0, rxjs_1.of)(window.localStorage).pipe((0, operators_1.map)(function (localStorage) { return Object.keys(localStorage); }), (0, operators_1.map)(function (keys) { return keys.map(function (key) { return key.replace(Session.BASE_NAME, ''); }); }), (0, operators_1.map)(function (keys) { return keys.reduce(function (acc, key) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[key] = Session.getItem(key), _a)));
        }, {}); }), (0, operators_1.switchMap)(function (payload) { return [Action.syncLocalStorageToReducer(payload)]; }));
    }));
};
exports.default = init;
