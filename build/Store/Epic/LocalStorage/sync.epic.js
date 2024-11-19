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
var LocalStorage_action_1 = require("../../Action/LocalStorage.action");
var rxjs_1 = require("rxjs");
var typesafe_actions_1 = require("typesafe-actions");
var Session = __importStar(require("../../../API/LOCAL_STORAGE/Session"));
var sync = function (action$) {
    return action$.pipe((0, rxjs_1.filter)((0, typesafe_actions_1.isActionOf)(LocalStorage_action_1.saveToLocalStorage)), (0, operators_1.tap)(function (_a) {
        var payload = _a.payload, meta = _a.meta;
        return Session.setItem(payload, meta);
    }), (0, operators_1.map)(function (_a) {
        var payload = _a.payload;
        return ({ key: payload, value: Session.getItem(payload) });
    }), (0, operators_1.mergeMap)(function (_a) {
        var _b;
        var key = _a.key, value = _a.value;
        return [(0, LocalStorage_action_1.syncLocalStorageToReducer)((_b = {}, _b[key] = value, _b))];
    }));
};
exports.default = sync;
