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
var Selector = __importStar(require("../../Selector/Core"));
var Action_1 = require("../../Action");
var rxjs_1 = require("rxjs");
var typesafe_actions_1 = require("typesafe-actions");
var handleMessages = function (action$, state$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)(Action_1.clippyInitialized)), (0, rxjs_1.map)(function () { return ({
        messages: Selector.ClippyConfig.pickConfigMessages(state$.value),
        interval: Selector.ClippyConfig.pickClippyInterval(state$.value),
        enabled: Selector.ClippyConfig.pickClippyEnabled(state$.value)
    }); }), (0, rxjs_1.filter)(function (_a) {
        var messages = _a.messages, interval = _a.interval, enabled = _a.enabled;
        return enabled && messages && interval > 0;
    }), (0, rxjs_1.switchMap)(function (_a) {
        var messages = _a.messages, interval = _a.interval;
        return (0, rxjs_1.timer)(0, interval).pipe((0, rxjs_1.concatMap)(function (index) { return [(0, Action_1.clippySay)(messages[index])]; }), (0, rxjs_1.take)(messages.length));
    }), (0, rxjs_1.takeUntil)(action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)([Action_1.clippyDestroy])))));
};
exports.default = handleMessages;
