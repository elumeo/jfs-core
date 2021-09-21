"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeLanguage = exports.changeLanguageAction = void 0;
var typesafe_actions_1 = require("typesafe-actions");
exports.changeLanguageAction = (0, typesafe_actions_1.createAction)('language/CHANGE')();
exports.initializeLanguage = (0, typesafe_actions_1.createAction)("language/INITIALIZE")();
