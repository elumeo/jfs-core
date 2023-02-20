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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var colors_1 = require("@mui/material/colors");
var Color_1 = require("../../../Constant/Color");
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
var sortingStyles = {
    backgroundColor: colors_1.grey[200],
    borderRadius: "".concat(Definition_1.default.spacing(.5), " ").concat(Definition_1.default.spacing(.5), " 0 0")
};
var TableHeadDefault = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 48 : _b, _c = _a.isNumeric, isNumeric = _c === void 0 ? false : _c, _d = _a.disableSort, disableSort = _d === void 0 ? false : _d, sortBy = _a.sortBy, sortDirection = _a.sortDirection, onClick = _a.onClick, label = _a.label, dataKey = _a.dataKey, rest = __rest(_a, ["height", "isNumeric", "disableSort", "sortBy", "sortDirection", "onClick", "label", "dataKey"]);
    var isActiveSort = sortBy === dataKey;
    var color = isActiveSort || !disableSort
        ? Color_1.apatith.main
        : 'inherit';
    var styles = (0, react_1.useMemo)(function () { return (__assign(__assign({}, (isActiveSort ? sortingStyles : {})), { height: height, maxWidth: '100%' })); }, [sortBy, isActiveSort, height]);
    var sort = function (e) { return disableSort || onClick(e); };
    return react_1.default.createElement(material_1.TableCell, __assign({ variant: 'head', sx: styles, align: isNumeric ? 'right' : 'left', onClick: sort }, rest),
        disableSort !== true &&
            react_1.default.createElement(material_1.TableSortLabel, { active: isActiveSort, direction: sortDirection, sx: { color: color } },
                react_1.default.createElement(material_1.Typography, { fontWeight: 600, variant: 'subtitle1', color: color }, label),
                isActiveSort
                    ? react_1.default.createElement(material_1.Box, { component: 'span', sx: VirtualizedTable_1.visuallyHiddenStyle }, "".concat(sortDirection).toLowerCase() === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending')
                    : null),
        disableSort && react_1.default.createElement(material_1.Typography, { fontWeight: 600, variant: 'subtitle1' }, label));
};
exports.default = TableHeadDefault;
