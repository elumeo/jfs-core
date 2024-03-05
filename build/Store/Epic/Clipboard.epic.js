"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../Action");
var Clipboard_action_1 = require("../Action/Clipboard.action");
var rxjs_1 = require("rxjs");
var typesafe_actions_1 = require("typesafe-actions");
var EventHandler_api_1 = require("../../API/EventHandler.api");
var handleCopy = function (action$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)([Clipboard_action_1.copyToClipboard])), (0, rxjs_1.map)(function (_a) {
        var payload = _a.payload;
        return payload;
    }), (0, rxjs_1.switchMap)(function (payload) {
        return (0, rxjs_1.from)((0, EventHandler_api_1.copyToClipboard)(payload.text)).pipe((0, rxjs_1.switchMap)(function (_a) {
            var _b;
            var success = _a.success;
            return [
                (0, Action_1.addToastAction)({
                    contentTranslationId: (_b = payload === null || payload === void 0 ? void 0 : payload.succcessMessage) !== null && _b !== void 0 ? _b : 'app.copyToClipboard.success',
                    isSuccess: success,
                    isError: !success,
                })
            ];
        }), (0, rxjs_1.catchError)(function (_a) {
            var _b;
            var success = _a.success;
            return [(0, Action_1.addToastAction)({
                    contentTranslationId: (_b = payload === null || payload === void 0 ? void 0 : payload.errorMessage) !== null && _b !== void 0 ? _b : 'app.copyToClipboard.failure',
                    isSuccess: success,
                    isError: !success,
                })];
        }));
    }));
};
exports.default = handleCopy;
