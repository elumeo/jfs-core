"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorizeSession = exports.authorizeSession = exports.logout = exports.checkSession = exports.loadSession = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.loadSession = (0, typesafe_actions_1.createAction)("session/LOAD")();
exports.checkSession = (0, typesafe_actions_1.createAction)('route/CHECK')();
exports.logout = (0, typesafe_actions_1.createAction)('route/LOGOUT')();
exports.authorizeSession = (0, typesafe_actions_1.createAction)('route/AUTHORIZE')();
exports.unauthorizeSession = (0, typesafe_actions_1.createAction)('route/UNAUTHORIZE')();
