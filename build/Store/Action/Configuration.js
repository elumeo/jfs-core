"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfigFailed = exports.configLoadedAction = exports.loadConfig = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.loadConfig = (0, typesafe_actions_1.createAction)('config/LOAD')();
exports.configLoadedAction = (0, typesafe_actions_1.createAction)('config/LOADED')();
exports.loadConfigFailed = (0, typesafe_actions_1.createAction)('config/LOAD_FAILED')();
