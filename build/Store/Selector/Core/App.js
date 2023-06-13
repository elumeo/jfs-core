"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packageJson = exports.appInitialized = void 0;
var reselect_1 = require("reselect");
exports.appInitialized = (0, reselect_1.createSelector)(function (state) { return state.Core.App; }, function (state) { return state.appInitialized; });
exports.packageJson = (0, reselect_1.createSelector)(function (state) { return state.Core.App; }, function (state) { return state.packageJson; });
