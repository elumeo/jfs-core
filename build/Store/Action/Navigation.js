"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeNavigation = exports.openNavigation = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.openNavigation = (0, typesafe_actions_1.createAction)('navigation/OPEN')();
exports.closeNavigation = (0, typesafe_actions_1.createAction)('navigation/CLOSE')();
