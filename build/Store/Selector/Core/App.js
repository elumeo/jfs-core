"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageJson = exports.allowRobotLogin = exports.appInitialized = void 0;
var reselect_1 = require("reselect");
exports.appInitialized = (0, reselect_1.createSelector)(function (state) { return state.Core.App; }, function (state) { return state.appInitialized; });
exports.allowRobotLogin = (0, reselect_1.createSelector)(function (state) { return state.Core.App; }, function (state) { return state.allowRobotLogin; });
exports.packageJson = (0, reselect_1.createSelector)(function (state) { return state.Core.App; }, function (state) { return state.packageJson; });
