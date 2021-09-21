"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginFailed = exports.loggedIn = exports.checkLogin = exports.closeLoginDialog = exports.openLoginDialog = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.openLoginDialog = (0, typesafe_actions_1.createAction)('login/OPEN')();
exports.closeLoginDialog = (0, typesafe_actions_1.createAction)('login/CLOSE')();
exports.checkLogin = (0, typesafe_actions_1.createAction)('login/CHECK')();
exports.loggedIn = (0, typesafe_actions_1.createAction)('login/LOGGED_IN')();
exports.loginFailed = (0, typesafe_actions_1.createAction)('login/LOGIN_FAILED')();
