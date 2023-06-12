"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Core_1 = __importDefault(require("./Core"));
var Global = (0, redux_1.combineReducers)({
    Core: Core_1.default,
});
exports.default = Global;
