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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var axios_1 = __importDefault(require("axios"));
var typesafe_actions_1 = require("typesafe-actions");
var Action = __importStar(require("../Action"));
var Client_1 = __importDefault(require("../../API/JSC/Client"));
var loadConfiguration = function (action$) {
    return action$.pipe((0, operators_1.filter)((0, typesafe_actions_1.isActionOf)(Action.loadConfig)), (0, operators_1.concatMap)(function () { return (0, rxjs_1.from)(axios_1.default.get("./config.json", {})); }), (0, operators_1.concatMap)(function (response) {
        var config = response.data;
        Client_1.default.setConfig(config);
        return (0, rxjs_1.of)(Action.configLoadedAction({ config: config }));
    }), (0, operators_1.catchError)(function () { return (0, rxjs_1.of)(Action.loadConfigFailed()); }));
};
exports.default = loadConfiguration;
