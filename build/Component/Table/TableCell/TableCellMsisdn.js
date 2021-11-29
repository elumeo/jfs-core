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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var FormattedMsisdn_1 = __importDefault(require("../../FormattedMsisdn"));
var TableCellLoadingContent_1 = __importDefault(require("../../Table/TableCell/TableCellLoadingContent"));
var TableCellRoot_1 = __importDefault(require("../../Table/TableCell/TableCellRoot"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var TableCellMsisdn = function (_a) {
    var cellData = _a.cellData, _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, rest = __rest(_a, ["cellData", "isLoading"]);
    return react_1.default.createElement(TableCellRoot_1.default, __assign({}, rest, { isNumeric: false }),
        isLoading === false && cellData && react_1.default.createElement("span", { style: VirtualizedTable_1.ellipsesStyle },
            react_1.default.createElement(FormattedMsisdn_1.default, { msisdn: cellData })) || '-',
        isLoading && react_1.default.createElement(TableCellLoadingContent_1.default, null));
};
exports.default = (0, react_1.memo)(TableCellMsisdn);
