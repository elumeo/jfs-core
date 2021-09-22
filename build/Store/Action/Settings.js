"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeSettings = exports.openSettings = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.openSettings = (0, typesafe_actions_1.createAction)('settings/OPEN')();
exports.closeSettings = (0, typesafe_actions_1.createAction)('settings/CLOSE')();
