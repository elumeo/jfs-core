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
exports.columnHeaderStyles = exports.rowNoClickStyles = exports.rowClickStyles = exports.rowStyles = exports.noOutlineStyles = exports.ellipsesStyle = exports.flexContainerStyles = exports.visuallyHiddenStyle = void 0;
var react_virtualized_1 = require("react-virtualized");
var react_1 = __importStar(require("react"));
var TableCell_1 = require("../Table/TableCell");
var TableHeadDefault_1 = __importDefault(require("../Table/TableHead/TableHeadDefault"));
var styles_1 = require("@material-ui/core/styles");
exports.visuallyHiddenStyle = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: '20px',
    width: '1px'
};
exports.flexContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
};
exports.ellipsesStyle = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
};
exports.noOutlineStyles = { outline: 'none' };
exports.rowStyles = { direction: 'inherit' };
exports.rowClickStyles = { cursor: 'pointer' };
exports.rowNoClickStyles = { cursor: 'initial' };
exports.columnHeaderStyles = { outline: 'none' };
var VirtualizedTable = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.onRowClick, onRowClick = _c === void 0 ? null : _c, rowCount = _a.rowCount, rowGetter = _a.rowGetter, _d = _a.headerHeight, headerHeight = _d === void 0 ? 48 : _d, _e = _a.rowHeight, rowHeight = _e === void 0 ? 48 : _e, _f = _a.showRowHoverHighlight, showRowHoverHighlight = _f === void 0 ? false : _f, onResize = _a.onResize, tableProps = __rest(_a, ["columns", "onRowClick", "rowCount", "rowGetter", "headerHeight", "rowHeight", "showRowHoverHighlight", "onResize"]);
    var _g = (0, react_1.useState)(null), rowHoverIndex = _g[0], setRowHoverIndex = _g[1];
    var theme = (0, styles_1.useTheme)();
    var getRowStyle = (0, react_1.useCallback)(function (info) { return (__assign(__assign(__assign(__assign(__assign({}, exports.noOutlineStyles), exports.flexContainerStyles), exports.rowStyles), (onRowClick !== null ? exports.rowClickStyles : exports.rowNoClickStyles)), (rowHoverIndex === info.index && showRowHoverHighlight ? { backgroundColor: theme.palette.grey[200] } : null))); }, [showRowHoverHighlight, onRowClick, rowHoverIndex]);
    var columnStyle = (0, react_1.useMemo)(function () { return (__assign(__assign({}, exports.flexContainerStyles), { height: '100%' })); }, []);
    var tableStyle = (0, react_1.useMemo)(function () { return ({ borderCollapse: 'separate' }); }, []);
    var headerRenderer = (0, react_1.useCallback)(function (headerProps) { return react_1.default.createElement(TableHeadDefault_1.default, { height: headerHeight, disableSort: headerProps.disableSort, sortBy: headerProps.sortBy, sortDirection: headerProps.sortDirection, label: headerProps.label, dataKey: headerProps.dataKey }); }, [headerHeight]);
    var getFinalColumnWidth = (0, react_1.useCallback)(function (columnWidth, tableWidth) { return typeof columnWidth !== 'number'
        ? columnWidth(tableWidth)
        : columnWidth; }, []);
    var handleOnRowMouseOver = (0, react_1.useCallback)(function (info) { return setRowHoverIndex(info.index); }, []);
    var handleOnRowMouseOut = (0, react_1.useCallback)(function () { return setRowHoverIndex(null); }, []);
    var getCellRenderer = (0, react_1.useCallback)(function (props) { return react_1.default.createElement(TableCell_1.TableCellDefault, { cellData: props.cellData, isNumeric: (props.columnIndex != null && columns[props.columnIndex].numeric) || false }); }, []);
    return react_1.default.createElement(react_virtualized_1.AutoSizer, { onResize: onResize }, function (_a) {
        var height = _a.height, width = _a.width;
        return (react_1.default.createElement(react_virtualized_1.Table, __assign({ ref: ref, height: height, width: width, rowStyle: getRowStyle, onRowMouseOver: handleOnRowMouseOver, onRowMouseOut: handleOnRowMouseOut, headerHeight: headerHeight, rowHeight: rowHeight, rowCount: rowCount, rowGetter: rowGetter, onRowClick: onRowClick, gridStyle: exports.noOutlineStyles, style: tableStyle }, tableProps), columns.map(function (_a) {
            var dataKey = _a.dataKey, columnWidth = _a.width, other = __rest(_a, ["dataKey", "width"]);
            return react_1.default.createElement(react_virtualized_1.Column, __assign({ key: dataKey, headerStyle: exports.columnHeaderStyles, headerRenderer: headerRenderer, style: columnStyle, cellRenderer: getCellRenderer, dataKey: dataKey, width: getFinalColumnWidth(columnWidth, width) }, other));
        })));
    });
});
exports.default = (0, react_1.memo)(VirtualizedTable);
