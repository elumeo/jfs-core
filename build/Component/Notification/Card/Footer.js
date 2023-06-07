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
var material_1 = require("@mui/material");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var react_intl_1 = require("react-intl");
var httpDetailsStyle = { wordBreak: 'break-word' };
var Footer = function (_a) {
    var timeStamp = _a.timeStamp, httpDetails = _a.httpDetails, sx = _a.sx;
    var _b = (0, react_intl_1.useIntl)(), formatDate = _b.formatDate, formatTime = _b.formatTime;
    var formattedTimeStamp = "".concat(formatDate(timeStamp, { dateStyle: 'medium' }), " ").concat(formatTime(timeStamp, { timeStyle: 'medium' }));
    return (!httpDetails && !formattedTimeStamp
        ? null :
        (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: sx }, { children: [httpDetails && (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ sx: httpDetailsStyle, variant: 'caption', component: 'div' }, { children: httpDetails })), formattedTimeStamp && (0, jsx_runtime_1.jsx)(Typography_1.default, __assign({ variant: 'caption', component: 'div', noWrap: true }, { children: formattedTimeStamp }))] })));
};
exports.default = Footer;
