"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Theme_1 = __importDefault(require("./Theme"));
require("material-icons/iconfont/material-icons.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
var Style = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Theme_1.default, null,
        react_1.default.createElement(material_1.CssBaseline, null),
        children));
};
exports.default = Style;
