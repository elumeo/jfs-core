"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var styled_components_1 = require("styled-components");
var Definition_1 = __importDefault(require("./Definition"));
var Theme = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Definition_1.default },
        react_1.default.createElement(styled_components_1.ThemeProvider, { theme: Definition_1.default },
            react_1.default.createElement(styles_1.StylesProvider, { injectFirst: true }, children))));
};
exports.default = Theme;
