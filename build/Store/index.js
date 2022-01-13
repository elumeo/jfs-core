"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var Redux = __importStar(require("redux"));
var Middleware_1 = __importStar(require("./Middleware"));
var rxjs_1 = require("rxjs");
var Rx = __importStar(require("rxjs/operators"));
var Epic_1 = require("./Epic");
var Action = __importStar(require("./Action"));
var handle = function (error) {
    var _a;
    if (((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
        return (0, rxjs_1.of)(Action.unauthorizeSession());
    }
    if ((error === null || error === void 0 ? void 0 : error.message) === 'Network Error') {
        var _b = error.config, method = _b.method, url = _b.url;
        return (0, rxjs_1.of)(Action.addNotification({
            variant: 'error',
            content: "Network Error: ".concat(method.toUpperCase(), " ").concat(url),
        }));
    }
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
        var _c = error.config, method = _c.method, url = _c.url;
        return (0, rxjs_1.of)(Action.addNotification({
            variant: 'error',
            content: "Request Timeout: ".concat(method.toUpperCase(), " ").concat(url),
        }));
    }
    return null;
};
var create = function (epic, reducer) {
    var store = Redux.createStore(reducer, Middleware_1.default);
    var wrapped = (0, Epic_1.wrap)(epic, function (action$) {
        return action$.pipe(Rx.catchError(function (error, source) { return (error.isAxiosError && handle(error)) || source; }));
    });
    (0, Middleware_1.start)(wrapped);
    return store;
};
exports.create = create;
