"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var save_epic_1 = __importDefault(require("./save.epic"));
exports.default = (0, redux_observable_1.combineEpics)(save_epic_1.default);
