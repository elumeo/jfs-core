"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.log = exports.register = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.register = (0, typesafe_actions_1.createAction)('CORE/DEBUGGER/register')();
exports.log = (0, typesafe_actions_1.createAction)('CORE/DEBUGGER/log')();
exports.post = (0, typesafe_actions_1.createAction)('CORE/DEBUGGer/mattermost/post')();
