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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("./../Action"));
var operators_1 = require("rxjs/operators");
var JSC_1 = __importDefault(require("../../API/JSC"));
var rxjs_1 = require("rxjs");
var Configuration_1 = require("./../Selector/Core/Configuration");
var register = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)(function () { var _a; return (_a = (0, Configuration_1.Configuration)(state$.value)) === null || _a === void 0 ? void 0 : _a.DebugMode; }), (0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.Debug.register)), (0, operators_1.map)(function (_a) {
        var _b = _a.payload, actions = _b.actions, filter = _b.filter, mapper = _b.mapper;
        return ({ actions: actions, filter: filter, mapper: mapper });
    }), (0, operators_1.switchMap)(function (_a) {
        var actions = _a.actions, filter = _a.filter, mapper = _a.mapper;
        return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(actions)), (0, operators_1.filter)(filter), (0, operators_1.map)(mapper), (0, operators_1.map)(Action.Debug.log));
    }));
};
var post = function (action$, _, _a) {
    var intl = _a.intl;
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.Debug.post)), (0, operators_1.map)(function (_a) {
        var payload = _a.payload;
        return ({ message: payload.description, payload: JSON.stringify(payload) });
    }), (0, operators_1.switchMap)(function (dto) {
        return (0, rxjs_1.from)(JSC_1.default.DebugNotificationClient.sendToMattermost(dto))
            .pipe((0, operators_1.switchMap)(function () { return [Action.addToastAction({ contentMessage: intl().formatMessage({ id: 'debug.submitted' }) })]; }), (0, operators_1.catchError)(function (e) { return [Action.addErrorNotification(e)]; }));
    }));
};
exports.default = (0, redux_observable_1.combineEpics)(register, post);
