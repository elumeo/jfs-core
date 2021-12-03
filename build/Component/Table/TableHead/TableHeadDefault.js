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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var styles_1 = require("@material-ui/core/styles");
var sortingStyles = {
    backgroundColor: '#eee',
    borderRadius: '4px 4px 0 0'
};
var TableHeadDefault = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 48 : _b, _c = _a.isNumeric, isNumeric = _c === void 0 ? false : _c, _d = _a.disableSort, disableSort = _d === void 0 ? false : _d, sortBy = _a.sortBy, sortDirection = _a.sortDirection, label = _a.label, dataKey = _a.dataKey;
    var theme = (0, styles_1.useTheme)();
    var isActiveSort = (0, react_1.useMemo)(function () { return sortBy === dataKey; }, [sortBy]);
    var styles = (0, react_1.useMemo)(function () { return (__assign(__assign(__assign(__assign({}, VirtualizedTable_1.flexContainerStyles), VirtualizedTable_1.rowNoClickStyles), (isActiveSort ? sortingStyles : null)), { height: height + 'px', flex: 1, padding: theme.spacing(1), maxWidth: '100%' })); }, [sortBy]);
    var mapSortDirection = function (sortDirection) { return sortDirection === 'ASC' ? 'asc' : 'desc'; };
    return react_1.default.createElement(core_1.TableCell, { component: 'div', variant: 'head', style: styles, align: isNumeric || false ? 'right' : 'left' },
        disableSort !== true && react_1.default.createElement(core_1.TableSortLabel, { active: isActiveSort, direction: isActiveSort ? mapSortDirection(sortDirection) : 'asc' },
            react_1.default.createElement("div", null, label),
            isActiveSort ? react_1.default.createElement("span", { style: VirtualizedTable_1.visuallyHiddenStyle }, sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending') : null),
        disableSort && react_1.default.createElement("span", null, label));
};
exports.default = (0, react_1.memo)(TableHeadDefault);
