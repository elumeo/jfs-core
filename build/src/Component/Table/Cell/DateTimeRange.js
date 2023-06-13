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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_intl_1 = require("react-intl");
var Format_1 = require("Utilities/Format");
var Root_1 = __importDefault(require("Component/Table/Cell/Root"));
var DateTimeRange = function (_a) {
    var _b = _a.value, value = _b === void 0 ? null : _b, _c = _a.noValueElement, noValueElement = _c === void 0 ? '-' : _c, rest = __rest(_a, ["value", "noValueElement"]);
    var _d = (0, react_intl_1.useIntl)(), formatDate = _d.formatDate, formatTime = _d.formatTime;
    var startDate;
    var startTime;
    var endDate;
    var endTime;
    var hasSameDate;
    if (value) {
        startDate = formatDate(value.start, Format_1.DateTime.getDefaultDateFormatOptions());
        startTime = formatTime(value.start, Format_1.DateTime.getDefaultTimeFormatOptions(true));
        endDate = formatDate(value.end, Format_1.DateTime.getDefaultDateFormatOptions());
        endTime = formatTime(value.end, Format_1.DateTime.getDefaultTimeFormatOptions(true));
        hasSameDate = startDate === endDate;
    }
    return (0, jsx_runtime_1.jsxs)(Root_1.default, __assign({}, rest, { children: [(value === null || value === undefined || value.start === null) && noValueElement, value && value.start !== null && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [hasSameDate && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [startDate, (0, jsx_runtime_1.jsx)("br", {}), startTime, " - ", endTime] }), hasSameDate === false && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [startDate, " ", startTime, " -", (0, jsx_runtime_1.jsx)("br", {}), endDate, " ", endTime] })] })] }));
};
exports.default = DateTimeRange;
