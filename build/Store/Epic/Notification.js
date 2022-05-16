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
exports.mapErrorToNotification = void 0;
var operators_1 = require("rxjs/operators");
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../Action"));
var uuid_1 = require("uuid");
var mapErrorToNotification = function (error) {
    var _a, _b, _c, _d, _e, _f;
    var id = (0, uuid_1.v4)();
    var responseData = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data;
    var httpDetails = "".concat(((_c = (_b = error === null || error === void 0 ? void 0 : error.config) === null || _b === void 0 ? void 0 : _b.method) === null || _c === void 0 ? void 0 : _c.toUpperCase()) || '', " ").concat(((_d = error === null || error === void 0 ? void 0 : error.config) === null || _d === void 0 ? void 0 : _d.url) || '', " ").concat(((_e = error === null || error === void 0 ? void 0 : error.response) === null || _e === void 0 ? void 0 : _e.status) || '').trim();
    var title = ((_f = error === null || error === void 0 ? void 0 : error.response) === null || _f === void 0 ? void 0 : _f.statusText) || (error === null || error === void 0 ? void 0 : error.name);
    var subtitle = (responseData === null || responseData === void 0 ? void 0 : responseData.error) || (error === null || error === void 0 ? void 0 : error.message);
    var content = (responseData === null || responseData === void 0 ? void 0 : responseData.message) || null;
    return { id: id, title: title, subtitle: subtitle, content: content, httpDetails: httpDetails, variant: 'error' };
};
exports.mapErrorToNotification = mapErrorToNotification;
var showError = function (action$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.addErrorNotification)), (0, operators_1.switchMap)(function (_a) {
        var payload = _a.payload;
        return [
            Action.addNotification((0, exports.mapErrorToNotification)(payload))
        ];
    }), (0, operators_1.catchError)(function (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return [];
    }));
};
exports.default = showError;
