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
var jsx_runtime_1 = require("react/jsx-runtime");
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var classes = {
    root: {
        gridRowStart: 2,
        gridColumnStart: 1,
        gridColumnEnd: 'none'
    },
    typoSx: {
        wordBreak: 'break-word'
    }
};
var Content = function (_a) {
    var children = _a.children;
    return (!children
        ? null :
        (0, jsx_runtime_1.jsx)(CardContent_1.default, __assign({ sx: classes.root }, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variant: 'body2', component: 'div', sx: classes.typoSx }, { children: children })) })));
};
exports.default = Content;
