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
exports.sortingStyles = void 0;
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var colors_1 = require("@mui/material/colors");
var Color_1 = require("../../../Constant/Color");
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
exports.sortingStyles = {
    backgroundColor: colors_1.grey[200],
    borderRadius: "".concat(Definition_1.default.spacing(.5), " ").concat(Definition_1.default.spacing(.5), " 0 0")
};
var Default = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 48 : _b, _c = _a.isNumeric, isNumeric = _c === void 0 ? false : _c, _d = _a.disableSort, disableSort = _d === void 0 ? false : _d, sortBy = _a.sortBy, sortDirection = _a.sortDirection, onClick = _a.onClick, label = _a.label, dataKey = _a.dataKey, width = _a.width, sx = _a.sx, rest = __rest(_a, ["height", "isNumeric", "disableSort", "sortBy", "sortDirection", "onClick", "label", "dataKey", "width", "sx"]);
    var isActiveSort = sortBy === dataKey;
    var color = isActiveSort || !disableSort
        ? Color_1.apatith.main
        : 'inherit';
    var styles = (0, react_1.useMemo)(function () { return (__assign(__assign(__assign({}, (isActiveSort ? exports.sortingStyles : {})), { height: height, maxWidth: '100%', width: width }), sx)); }, [sortBy, isActiveSort, height, width, sx]);
    var sort = function () { return disableSort || (onClick !== undefined && onClick(dataKey, isActiveSort ? (sortDirection === 'asc' ? 'desc' : 'asc') : 'asc')); };
    return (0, jsx_runtime_1.jsxs)(material_1.TableCell, __assign({ variant: "head", sx: styles, align: rest.align ? rest.align : isNumeric ? 'right' : 'left', onClick: sort }, rest, { children: [disableSort && (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ fontWeight: 600, variant: "subtitle1" }, { children: label })), !disableSort && (0, jsx_runtime_1.jsxs)(material_1.TableSortLabel, __assign({ active: isActiveSort, direction: sortDirection, sx: { color: color } }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ fontWeight: 600, lineHeight: 1, variant: "subtitle1", color: color }, { children: label })), isActiveSort
                        ? (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ component: "span", sx: VirtualizedTable_1.visuallyHiddenStyle }, { children: "".concat(sortDirection).toLowerCase() === 'desc' ? 'sorted descending' : 'sorted ascending' }))
                        : null] }))] }));
};
exports.default = Default;
