"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dismissToastAction = exports.addToastAction = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.addToastAction = (0, typesafe_actions_1.createAction)('toast/ADD')();
exports.dismissToastAction = (0, typesafe_actions_1.createAction)('toast/DELETE')();
