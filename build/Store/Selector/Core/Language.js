"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translations = exports.translationLanguage = void 0;
var reselect_1 = require("reselect");
exports.translationLanguage = (0, reselect_1.createSelector)(function (state) { return state.Core.Language; }, function (state) { return state.language; });
exports.translations = (0, reselect_1.createSelector)(function (state) { return state.Core.Language; }, function (state) { return state.messages; });
