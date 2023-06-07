"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var material_1 = require("@mui/material");
var Theme_1 = __importDefault(require("./Theme"));
require("material-icons/iconfont/material-icons.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
var Style = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(Theme_1.default, { children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), children] }));
};
exports.default = Style;
