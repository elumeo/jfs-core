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
var react_1 = __importDefault(require("react"));
var FormattedMsisdn_1 = __importDefault(require("../../FormattedMsisdn"));
var TableCellLoadingContent_1 = __importDefault(require("../../Table/TableCell/TableCellLoadingContent"));
var TableCellRoot_1 = __importDefault(require("../../Table/TableCell/TableCellRoot"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var material_1 = require("@mui/material");
var TableCellMsisdn = function (_a) {
    var cellData = _a.cellData, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, rest = __rest(_a, ["cellData", "isLoading"]);
    return react_1.default.createElement(TableCellRoot_1.default, __assign({}, rest, { isNumeric: false }), isLoading
        ? react_1.default.createElement(TableCellLoadingContent_1.default, null)
        : cellData
            ? react_1.default.createElement(material_1.Box, { sx: VirtualizedTable_1.ellipsesStyle },
                react_1.default.createElement(FormattedMsisdn_1.default, { msisdn: cellData }))
            : '-');
};
exports.default = TableCellMsisdn;
