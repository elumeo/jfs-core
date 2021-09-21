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
exports.useStyles = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return (0, styles_1.createStyles)({
    noClick: {
        cursor: 'initial'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1
    },
    tableSortRoot: {
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}); });
var TableHeadDefault = function (_a) {
    var headerProps = _a.headerProps;
    var classes = (0, exports.useStyles)();
    var globalClasses = (0, VirtualizedTable_1.globalStyles)();
    var mapSortDirection = function (sortDirection) {
        return sortDirection === 'ASC' ? 'asc' : 'desc';
    };
    return (headerProps && (react_1.default.createElement(core_1.TableCell, { component: 'div', className: (0, clsx_1.default)(globalClasses.tableCell, globalClasses.flexContainer, classes.noClick), variant: 'head', style: { height: headerProps.columnData.headerHeight }, align: headerProps.columnData.numeric || false ? 'right' : 'left' },
        headerProps.disableSort !== true && (react_1.default.createElement(core_1.TableSortLabel, { classes: { root: classes.tableSortRoot }, active: headerProps.sortBy === headerProps.dataKey, direction: headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc' },
            headerProps.label,
            headerProps.sortBy === headerProps.dataKey ? (react_1.default.createElement("span", { className: classes.visuallyHidden }, headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending')) : null)),
        headerProps.disableSort && react_1.default.createElement("span", null, headerProps.label))));
};
exports.default = (0, react_1.memo)(TableHeadDefault);
