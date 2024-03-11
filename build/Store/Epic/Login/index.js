"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var commitLogin_1 = __importDefault(require("./commitLogin"));
var getLoginPublicKey_1 = __importDefault(require("./getLoginPublicKey"));
var robotLoginRefresh_1 = __importDefault(require("./robotLoginRefresh"));
exports.default = (0, redux_observable_1.combineEpics)(robotLoginRefresh_1.default, commitLogin_1.default, getLoginPublicKey_1.default);
