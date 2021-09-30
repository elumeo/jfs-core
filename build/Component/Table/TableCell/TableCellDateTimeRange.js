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
var core_1 = require("@material-ui/core");
var react_1 = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var VirtualizedTable_1 = require("../VirtualizedTable");
var react_intl_1 = require("react-intl");
var Format_1 = require("../../../Utilities/Format");
var TableCellDateTimeRange = function (_a) {
    var _b = _a.cellData, cellData = _b === void 0 ? null : _b, _c = _a.noValueElement, noValueElement = _c === void 0 ? '-' : _c;
    var _d = (0, react_intl_1.useIntl)(), formatDate = _d.formatDate, formatTime = _d.formatTime;
    var globalClasses = (0, VirtualizedTable_1.globalStyles)();
    var startDate;
    var startTime;
    var endDate;
    var endTime;
    var hasSameDate;
    if (cellData !== null) {
        startDate = formatDate(cellData.start, Format_1.DateTime.getDefaultDateFormatOptions());
        startTime = formatTime(cellData.start, Format_1.DateTime.getDefaultTimeFormatOptions(true));
        endDate = formatDate(cellData.end, Format_1.DateTime.getDefaultDateFormatOptions());
        endTime = formatTime(cellData.end, Format_1.DateTime.getDefaultTimeFormatOptions(true));
        hasSameDate = startDate === endDate;
    }
    return react_1.default.createElement(core_1.TableCell, { component: 'div', className: (0, clsx_1.default)(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body', style: { height: '100%' }, align: 'left' },
        (cellData === null || cellData.start === null) && noValueElement,
        cellData !== null && cellData.start !== null && react_1.default.createElement(react_1.default.Fragment, null,
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
                react_1.default.createElement("br", null),
                endDate,
                " ",
                endTime)));
};
exports.default = (0, react_1.memo)(TableCellDateTimeRange);
