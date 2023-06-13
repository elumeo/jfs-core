"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
var reselect_1 = require("reselect");
var Global_1 = __importDefault(require("./Global"));
exports.Core = (0, reselect_1.createSelector)(Global_1.default, function (state) { return state.Core; });
