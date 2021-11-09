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
    var _b = _a.height, height = _b === void 0 ? 48 : _b, _c = _a.isNumeric, isNumeric = _c === void 0 ? false : _c, _d = _a.disableSort, disableSort = _d === void 0 ? false : _d, sortBy = _a.sortBy, sortDirection = _a.sortDirection, label = _a.label, dataKey = _a.dataKey, _e = _a.className, className = _e === void 0 ? '' : _e;
    var mapSortDirection = function (sortDirection) { return sortDirection === 'ASC' ? 'asc' : 'desc'; };
    return (react_1.default.createElement(core_1.TableCell, { component: 'div', className: "virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click " + className, variant: 'head', style: { height: height }, align: isNumeric || false ? 'right' : 'left' },
        disableSort !== true && (react_1.default.createElement(core_1.TableSortLabel, { active: sortBy === dataKey, direction: sortBy === dataKey ? mapSortDirection(sortDirection) : 'asc' },
            react_1.default.createElement("div", null, label),
            sortBy === dataKey ? (react_1.default.createElement("span", { className: 'virtualized-table--visually-hidden' }, sortDirection.toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending')) : null)),
        disableSort && react_1.default.createElement("span", null, label)));
};
exports.default = (0, react_1.memo)(TableHeadDefaultBase);
