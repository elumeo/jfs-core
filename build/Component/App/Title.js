"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = __importDefault(require("react-helmet"));
var Title = function (_a) {
    var value = _a.value;
    return (react_1.default.createElement(react_helmet_1.default, null,
        react_1.default.createElement("title", null, value)));
};
exports.default = Title;
