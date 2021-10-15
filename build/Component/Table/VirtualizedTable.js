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
var react_virtualized_1 = require("react-virtualized");
var react_1 = __importStar(require("react"));
var TableCell_1 = require("../Table/TableCell");
var StyledTableHeadDefault_1 = __importDefault(require("../Table/TableHead/StyledTableHeadDefault"));
var VirtualizedTable = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.onRowClick, onRowClick = _c === void 0 ? null : _c, rowCount = _a.rowCount, rowGetter = _a.rowGetter, _d = _a.headerHeight, headerHeight = _d === void 0 ? 48 : _d, _e = _a.rowHeight, rowHeight = _e === void 0 ? 48 : _e, _f = _a.showRowHoverHighlight, showRowHoverHighlight = _f === void 0 ? false : _f, onResize = _a.onResize, tableProps = __rest(_a, ["columns", "onRowClick", "rowCount", "rowGetter", "headerHeight", "rowHeight", "showRowHoverHighlight", "onResize"]);
    var getRowClassName = function (index) { return 'virtualized-table__row virtualized-table__flex-container'
        + (index.index !== -1 && showRowHoverHighlight === true
            ? ' virtualized-table__row--hover'
            : '')
        + (onRowClick !== null
            ? ' virtualized-table--click'
            : ''); };
    return (react_1.default.createElement(react_virtualized_1.AutoSizer, { onResize: onResize }, function (_a) {
        var height = _a.height, width = _a.width;
        return (react_1.default.createElement(react_virtualized_1.Table, __assign({ ref: ref, height: height, width: width, rowClassName: getRowClassName, headerHeight: headerHeight, rowHeight: rowHeight, rowCount: rowCount, rowGetter: rowGetter, onRowClick: onRowClick, gridClassName: 'virtualized-table__grid' }, tableProps), columns.map(function (_a, index) {
            var dataKey = _a.dataKey, columnWidth = _a.width, other = __rest(_a, ["dataKey", "width"]);
            var finalWidth = (typeof columnWidth !== 'number')
                ? columnWidth(width)
                : columnWidth;
            return (react_1.default.createElement(react_virtualized_1.Column, __assign({ key: dataKey, headerStyle: { outline: 'none' }, headerRenderer: function (headerProps) {
                    var columnData = headerProps.columnData !== undefined ? headerProps.columnData : {};
                    columnData.index = index;
                    columnData.numeric = columns[index].numeric;
                    columnData.headerHeight = headerHeight;
                    return react_1.default.createElement(StyledTableHeadDefault_1.default, { headerProps: __assign(__assign({}, headerProps), { columnData: columnData }) });
                }, className: 'virtualized-table__flex-container', cellRenderer: function (_a) {
                    var cellData = _a.cellData, columnIndex = _a.columnIndex;
                    return react_1.default.createElement(TableCell_1.StyledTableCellDefault, { cellData: cellData, isNumeric: (columnIndex != null && columns[columnIndex].numeric) || false });
                }, dataKey: dataKey, width: finalWidth }, other)));
        })));
    }));
});
exports.default = (0, react_1.memo)(VirtualizedTable);
