"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var init_epic_1 = __importDefault(require("./init.epic"));
var sync_epic_1 = __importDefault(require("./sync.epic"));
exports.default = (0, redux_observable_1.combineEpics)(init_epic_1.default, sync_epic_1.default);
