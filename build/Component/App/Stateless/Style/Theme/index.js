"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var useTheme_1 = __importDefault(require("../../../../../Effect/useTheme"));
var Theme = function (_a) {
    var children = _a.children;
    var theme = (0, useTheme_1.default)().theme;
    return (0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, __assign({ theme: theme }, { children: children }));
};
exports.default = Theme;
