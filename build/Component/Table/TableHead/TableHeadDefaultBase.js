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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var TableHeadDefaultBase = function (_a) {
    var headerProps = _a.headerProps, _b = _a.className, className = _b === void 0 ? '' : _b;
    var mapSortDirection = function (sortDirection) { return sortDirection === 'ASC' ? 'asc' : 'desc'; };
    return (headerProps && (react_1.default.createElement(core_1.TableCell, { component: 'div', className: "virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click " + className, variant: 'head', style: { height: headerProps.columnData.headerHeight }, align: headerProps.columnData.numeric || false ? 'right' : 'left' },
        headerProps.disableSort !== true && (react_1.default.createElement(core_1.TableSortLabel, { active: headerProps.sortBy === headerProps.dataKey, direction: headerProps.sortBy === headerProps.dataKey ? mapSortDirection(headerProps.sortDirection) : 'asc' },
            react_1.default.createElement("div", null, headerProps.label),
            headerProps.sortBy === headerProps.dataKey ? (react_1.default.createElement("span", { className: 'virtualized-table--visually-hidden' }, headerProps.sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending')) : null)),
        headerProps.disableSort && react_1.default.createElement("span", null, headerProps.label))));
};
exports.default = (0, react_1.memo)(TableHeadDefaultBase);
