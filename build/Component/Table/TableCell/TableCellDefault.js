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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentEllipseMode = void 0;
var react_1 = __importStar(require("react"));
var TableCell_1 = require("../../Table/TableCell");
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var ContentEllipseMode;
(function (ContentEllipseMode) {
    ContentEllipseMode["None"] = "none";
    ContentEllipseMode["Normal"] = "normal";
    ContentEllipseMode["Lines"] = "lines";
})(ContentEllipseMode = exports.ContentEllipseMode || (exports.ContentEllipseMode = {}));
var TableCellDefault = function (_a) {
    var cellData = _a.cellData, _b = _a.overflow, overflow = _b === void 0 ? 'hidden' : _b, _c = _a.contentEllipseMode, contentEllipseMode = _c === void 0 ? ContentEllipseMode.Lines : _c, _d = _a.contentEllipseLines, contentEllipseLines = _d === void 0 ? 4 : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, rest = __rest(_a, ["cellData", "overflow", "contentEllipseMode", "contentEllipseLines", "isLoading"]);
    var ellipsesLinesStyle = (0, react_1.useMemo)(function () { return ({
        overflow: overflow,
        whiteSpace: 'normal',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: contentEllipseLines,
        display: '-webkit-box',
    }); }, [contentEllipseLines]);
    var getStyles = (0, react_1.useCallback)(function () {
        switch (contentEllipseMode) {
            case ContentEllipseMode.Lines:
                return ellipsesLinesStyle;
            case ContentEllipseMode.Normal:
                return VirtualizedTable_1.ellipsesStyle;
            case ContentEllipseMode.None:
            default:
                return null;
        }
    }, []);
    return react_1.default.createElement(TableCell_1.TableCellRoot, __assign({}, rest),
        isLoading === false && react_1.default.createElement("span", { style: getStyles() }, cellData),
        isLoading && react_1.default.createElement(TableCell_1.TableCellLoadingContent, null));
};
exports.default = (0, react_1.memo)(TableCellDefault);
