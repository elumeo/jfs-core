"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var Definition_1 = __importDefault(require("./Definition"));
var Theme = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styles_1.Experimental_CssVarsProvider, { theme: Definition_1.default }, children));
};
exports.default = Theme;
