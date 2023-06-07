"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_helmet_1 = __importDefault(require("react-helmet"));
var Title = function (_a) {
    var value = _a.value;
    return ((0, jsx_runtime_1.jsx)(react_helmet_1.default, { children: (0, jsx_runtime_1.jsx)("title", { children: value }) }));
};
exports.default = Title;
