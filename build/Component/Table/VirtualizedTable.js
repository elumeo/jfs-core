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
exports.useStyles = exports.globalStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var react_virtualized_1 = require("react-virtualized");
var react_1 = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var TableCell_1 = require("../Table/TableCell");
var TableHeadDefault_1 = __importDefault(require("../Table/TableHead/TableHeadDefault"));
exports.globalStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        flexContainer: {
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            height: '100%'
        },
        tableCell: {
            flex: 1,
            padding: theme.spacing(1),
            maxWidth: '100%'
        }
    });
});
exports.useStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        table: {
            'borderCollapse': 'separate',
            '& .ReactVirtualized__Table__headerRow': {
                flip: false,
                paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
                backgroundColor: theme.palette.background.paper,
                overflow: function (props) { return props.headerOverflow + ' !important'; }
            }
        },
        tableGrid: {
            outline: 'none'
        },
        tableRow: {
            outline: 'none'
        },
        tableRowHover: {
            '&:hover': {
                backgroundColor: theme.palette.grey[200]
            }
        },
        onRowClick: {
            cursor: 'pointer'
        }
    });
});
var VirtualizedTable = react_1.default.forwardRef(function (props, ref) {
    var _a = props.columns, columns = _a === void 0 ? [] : _a, _b = props.onRowClick, onRowClick = _b === void 0 ? null : _b, rowCount = props.rowCount, rowGetter = props.rowGetter, _c = props.headerHeight, headerHeight = _c === void 0 ? 48 : _c, _d = props.rowHeight, rowHeight = _d === void 0 ? 48 : _d, _e = props.showRowHoverHighlight, showRowHoverHighlight = _e === void 0 ? false : _e, _f = props.headerOverflow, headerOverflow = _f === void 0 ? 'hidden' : _f, onResize = props.onResize, tableProps = __rest(props, ["columns", "onRowClick", "rowCount", "rowGetter", "headerHeight", "rowHeight", "showRowHoverHighlight", "headerOverflow", "onResize"]);
    var globalClasses = (0, exports.globalStyles)();
    var classes = (0, exports.useStyles)(__assign(__assign({}, props), { onRowClick: onRowClick, headerHeight: headerHeight, rowHeight: rowHeight, showRowHoverHighlight: showRowHoverHighlight, headerOverflow: headerOverflow }));
    var getRowClassName = function (index) {
        var _a;
        return (0, clsx_1.default)(classes.tableRow, globalClasses.flexContainer, (_a = {},
            _a[classes.tableRowHover] = index.index !== -1 && showRowHoverHighlight === true,
            _a[classes.onRowClick] = onRowClick !== null,
            _a));
    };
    return (react_1.default.createElement(react_virtualized_1.AutoSizer, { onResize: onResize }, function (_a) {
        var height = _a.height, width = _a.width;
        return (react_1.default.createElement(react_virtualized_1.Table, __assign({ ref: ref, height: height, width: width, className: classes.table, headerHeight: headerHeight, rowHeight: rowHeight, rowCount: rowCount, rowGetter: rowGetter, rowClassName: getRowClassName, onRowClick: onRowClick, gridStyle: { direction: 'inherit' }, gridClassName: classes.tableGrid }, tableProps), columns.map(function (_a, index) {
            var dataKey = _a.dataKey, columnWidth = _a.width, other = __rest(_a, ["dataKey", "width"]);
            var finalWidth;
            if (typeof columnWidth !== 'number') {
                finalWidth = columnWidth(width);
            }
            else {
                finalWidth = columnWidth;
            }
            return (react_1.default.createElement(react_virtualized_1.Column, __assign({ key: dataKey, headerStyle: { outline: 'none' }, headerRenderer: function (headerProps) {
                    var columnData = headerProps.columnData !== undefined ? headerProps.columnData : {};
                    columnData.index = index;
                    columnData.numeric = columns[index].numeric;
                    columnData.headerHeight = headerHeight;
                    return react_1.default.createElement(TableHeadDefault_1.default, { headerProps: __assign(__assign({}, headerProps), { columnData: columnData }) });
                }, className: globalClasses.flexContainer, cellRenderer: function (_a) {
                    var cellData = _a.cellData, columnIndex = _a.columnIndex;
                    return react_1.default.createElement(TableCell_1.TableCellDefault, { cellData: cellData, isNumeric: (columnIndex != null && columns[columnIndex].numeric) || false });
                }, dataKey: dataKey, width: finalWidth }, other)));
        })));
    }));
});
exports.default = (0, react_1.memo)(VirtualizedTable);
