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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var Format_1 = require("../../../Utilities/Format");
var Root_1 = __importDefault(require("../../Table/Cell/Root"));
var DateTime = function (_a) {
    var _b = _a.value, value = _b === void 0 ? null : _b, _c = _a.noValueElement, noValueElement = _c === void 0 ? '-' : _c, _d = _a.asTwoLines, asTwoLines = _d === void 0 ? true : _d, _e = _a.displayTime, displayTime = _e === void 0 ? true : _e, rest = __rest(_a, ["value", "noValueElement", "asTwoLines", "displayTime"]);
    var _f = (0, react_intl_1.useIntl)(), formatDate = _f.formatDate, formatTime = _f.formatTime;
    return (0, jsx_runtime_1.jsxs)(Root_1.default, __assign({}, rest, { children: [(value === null || value === undefined) && noValueElement, value && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [formatDate(value, Format_1.DateTime.getDefaultDateFormatOptions()), asTwoLines && (0, jsx_runtime_1.jsx)("br", {}), asTwoLines === false && ' ', displayTime && formatTime(value, Format_1.DateTime.getDefaultTimeFormatOptions(true))] })] }));
};
exports.default = (0, react_1.memo)(DateTime);
