"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_observable_1 = require("redux-observable");
var saveSelection_epic_1 = __importDefault(require("./saveSelection.epic"));
var handleClippy_epic_1 = __importDefault(require("./handleClippy.epic"));
var handleConfig_epic_1 = __importDefault(require("./handleConfig.epic"));
exports.default = (0, redux_observable_1.combineEpics)(handleClippy_epic_1.default, handleConfig_epic_1.default, saveSelection_epic_1.default);
