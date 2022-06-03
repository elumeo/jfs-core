"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugCallstackLimit = exports.DebugMode = exports.Configuration = void 0;
var reselect_1 = require("reselect");
var Core_1 = require("./Core");
exports.Configuration = (0, reselect_1.createSelector)(Core_1.Core, function (core) { return core.Configuration.config; });
exports.DebugMode = (0, reselect_1.createSelector)(exports.Configuration, function (config) { return config === null || config === void 0 ? void 0 : config.DebugMode; });
exports.DebugCallstackLimit = (0, reselect_1.createSelector)(exports.Configuration, function (config) { return config === null || config === void 0 ? void 0 : config.DebugCallstackLimit; });
