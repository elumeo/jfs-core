"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var react_intl_1 = require("react-intl");
var httpDetailsStyle = { wordBreak: 'break-word' };
var Footer = function (_a) {
    var timeStamp = _a.timeStamp, httpDetails = _a.httpDetails, className = _a.className;
    var _b = (0, react_intl_1.useIntl)(), formatDate = _b.formatDate, formatTime = _b.formatTime;
    var formattedTimeStamp = (0, react_1.useMemo)(function () {
        return timeStamp && React.createElement(React.Fragment, null,
            formatDate(timeStamp, { dateStyle: 'medium' }),
            "\u00A0",
            formatTime(timeStamp, { timeStyle: 'medium' }));
    }, [timeStamp]);
    return (!httpDetails && !formattedTimeStamp
        ? null :
        React.createElement(Box_1.default, { className: className },
            httpDetails && React.createElement(Typography_1.default, { style: httpDetailsStyle, variant: 'caption', component: 'div' }, httpDetails),
            formattedTimeStamp && React.createElement(Typography_1.default, { variant: 'caption', component: 'div' }, formattedTimeStamp)));
};
exports.default = React.memo(Footer);
