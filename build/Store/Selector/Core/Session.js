"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickUsername = exports.isCheckingSession = exports.isAuthorized = exports.pickState = void 0;
var reselect_1 = require("reselect");
var Core_1 = require("./Core");
exports.pickState = (0, reselect_1.createSelector)(Core_1.Core, function (core) { return core.Session; });
exports.isAuthorized = (0, reselect_1.createSelector)(exports.pickState, function (state) { return state.isAuthorized; });
exports.isCheckingSession = (0, reselect_1.createSelector)(exports.pickState, function (state) { return state.isCheckingSession; });
exports.pickUsername = (0, reselect_1.createSelector)(exports.pickState, function (state) { var _a, _b; return (_b = (_a = state.sessionDTO) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : ''; });
