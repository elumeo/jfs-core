"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var reselect_1 = require("reselect");
exports.Configuration = (0, reselect_1.createSelector)(function (state) { return state.Core.Configuration; }, function (state) { return state.config; });
