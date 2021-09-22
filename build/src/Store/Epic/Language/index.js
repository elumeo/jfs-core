"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var setInitialLanguage_1 = __importDefault(require("./setInitialLanguage"));
var setLanguage_1 = __importDefault(require("./setLanguage"));
exports.default = (0, redux_observable_1.combineEpics)(setInitialLanguage_1.default, setLanguage_1.default);
