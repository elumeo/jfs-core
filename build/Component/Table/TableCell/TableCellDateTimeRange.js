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
var react_1 = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var Format_1 = require("../../../Utilities/Format");
var TableCellRoot_1 = __importDefault(require("../../Table/TableCell/TableCellRoot"));
var TableCellDateTimeRange = function (_a) {
    var _b = _a.cellData, cellData = _b === void 0 ? null : _b, _c = _a.noValueElement, noValueElement = _c === void 0 ? '-' : _c, rest = __rest(_a, ["cellData", "noValueElement"]);
    var _d = (0, react_intl_1.useIntl)(), formatDate = _d.formatDate, formatTime = _d.formatTime;
    var startDate;
    var startTime;
    var endDate;
    var endTime;
    var hasSameDate;
    if (cellData) {
        startDate = formatDate(cellData.start, Format_1.DateTime.getDefaultDateFormatOptions());
        startTime = formatTime(cellData.start, Format_1.DateTime.getDefaultTimeFormatOptions(true));
        endDate = formatDate(cellData.end, Format_1.DateTime.getDefaultDateFormatOptions());
        endTime = formatTime(cellData.end, Format_1.DateTime.getDefaultTimeFormatOptions(true));
        hasSameDate = startDate === endDate;
    }
    return react_1.default.createElement(TableCellRoot_1.default, __assign({}, rest, { isNumeric: false }),
        (cellData === null || cellData === undefined || cellData.start === null) && noValueElement,
        cellData && cellData.start !== null && react_1.default.createElement(react_1.default.Fragment, null,
            hasSameDate && react_1.default.createElement(react_1.default.Fragment, null,
                startDate,
                react_1.default.createElement("br", null),
                startTime,
                " - ",
                endTime),
            hasSameDate === false && react_1.default.createElement(react_1.default.Fragment, null,
                startDate,
                " ",
                startTime,
                " -",
                react_1.default.createElement("br", null),
                endDate,
                " ",
                endTime)));
};
exports.default = (0, react_1.memo)(TableCellDateTimeRange);
