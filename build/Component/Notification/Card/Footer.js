"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
        react_1.default.createElement(material_1.Box, { sx: sx },
            httpDetails && react_1.default.createElement(Typography_1.default, { sx: httpDetailsStyle, variant: 'caption', component: 'div' }, httpDetails),
            formattedTimeStamp && react_1.default.createElement(Typography_1.default, { variant: 'caption', component: 'div', noWrap: true }, formattedTimeStamp)));
};
exports.default = Footer;
