"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var setLocaleByLanguage_1 = __importDefault(require("./setLocaleByLanguage"));
var bindSetLocaleToAction_1 = __importDefault(require("./bindSetLocaleToAction"));
exports.default = (0, redux_observable_1.combineEpics)(setLocaleByLanguage_1.default, bindSetLocaleToAction_1.default);
