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
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../Action"));
var uuid_1 = require("uuid");
var showError = function (action$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.addErrorNotification)), (0, operators_1.switchMap)(function (_a) {
        var _b, _c, _d, _e, _f, _g, _h;
        var payload = _a.payload;
        var id = (0, uuid_1.v4)();
        var responseData = (_c = (_b = payload === null || payload === void 0 ? void 0 : payload.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : {};
        var title = (_d = responseData === null || responseData === void 0 ? void 0 : responseData.id) !== null && _d !== void 0 ? _d : payload === null || payload === void 0 ? void 0 : payload.name;
        var subtitle = (_e = responseData === null || responseData === void 0 ? void 0 : responseData.message) !== null && _e !== void 0 ? _e : payload === null || payload === void 0 ? void 0 : payload.message;
        var content = (_f = responseData === null || responseData === void 0 ? void 0 : responseData.error) !== null && _f !== void 0 ? _f : null;
        return [Action.addNotification({
                id: id,
                title: title,
                subtitle: subtitle,
                content: content,
                httpDetails: payload.config.method.toUpperCase() + " " + payload.config.url + " " + ((_h = (_g = payload === null || payload === void 0 ? void 0 : payload.response) === null || _g === void 0 ? void 0 : _g.status) !== null && _h !== void 0 ? _h : ""),
                variant: 'error',
            })];
    }));
};
exports.default = showError;
