"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJfs2JfsWebSocketConnected = exports.isJsc2JfsWebSocketConnected = void 0;
var reselect_1 = require("reselect");
exports.isJsc2JfsWebSocketConnected = (0, reselect_1.createSelector)(function (state) { return state.Core.WebSocket['Jsc2Jfs']; }, function (namespace) { return namespace !== undefined && namespace.isConnected; });
exports.isJfs2JfsWebSocketConnected = (0, reselect_1.createSelector)(function (state) { return state.Core.WebSocket['Jfs2Jfs']; }, function (namespace) { return namespace !== undefined && namespace.isConnected; });
