"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var Format_1 = require("../../../Utilities/Format");
var TableCellBase_1 = __importDefault(require("../../Table/TableCell/TableCellBase"));
var TableCellDateTime = function (_a) {
    var _b = _a.cellData, cellData = _b === void 0 ? null : _b, _c = _a.noValueElement, noValueElement = _c === void 0 ? '-' : _c;
    var _d = (0, react_intl_1.useIntl)(), formatDate = _d.formatDate, formatTime = _d.formatTime;
    return react_1.default.createElement(TableCellBase_1.default, null,
        cellData === null && noValueElement,
        cellData !== null && react_1.default.createElement(react_1.default.Fragment, null,
            formatDate(cellData, Format_1.DateTime.getDefaultDateFormatOptions()),
            react_1.default.createElement("br", null),
            formatTime(cellData, Format_1.DateTime.getDefaultTimeFormatOptions(true))));
};
exports.default = (0, react_1.memo)(TableCellDateTime);
