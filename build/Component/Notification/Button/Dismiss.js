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
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var DismissButton = function (_a) {
    var onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ color: 'inherit', onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(Close_1.default, {}) })));
};
exports.default = DismissButton;
