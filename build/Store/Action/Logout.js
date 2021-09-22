"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutFinished = exports.closeLogout = exports.openLogout = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.openLogout = (0, typesafe_actions_1.createAction)('logout/OPEN')();
exports.closeLogout = (0, typesafe_actions_1.createAction)('logout/CLOSE')();
exports.logoutFinished = (0, typesafe_actions_1.createAction)("logout/FINISHED")();
