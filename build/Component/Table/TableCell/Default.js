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
exports.ContentEllipseMode = void 0;
var react_1 = __importDefault(require("react"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var Root_1 = __importDefault(require("../../Table/TableCell/Root"));
var material_1 = require("@mui/material");
var Loading_1 = __importDefault(require("./Loading"));
var ContentEllipseMode;
(function (ContentEllipseMode) {
    ContentEllipseMode["None"] = "none";
    ContentEllipseMode["Normal"] = "normal";
    ContentEllipseMode["Lines"] = "lines";
})(ContentEllipseMode = exports.ContentEllipseMode || (exports.ContentEllipseMode = {}));
var Default = function (_a) {
    var children = _a.children, _b = _a.overflow, overflow = _b === void 0 ? 'hidden' : _b, _c = _a.contentEllipseMode, contentEllipseMode = _c === void 0 ? ContentEllipseMode.Lines : _c, _d = _a.contentEllipseLines, contentEllipseLines = _d === void 0 ? 4 : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, rest = __rest(_a, ["children", "overflow", "contentEllipseMode", "contentEllipseLines", "isLoading"]);
    var ellipsesLinesStyle = react_1.default.useMemo(function () { return ({
        overflow: overflow,
        whiteSpace: 'normal',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: contentEllipseLines,
        display: '-webkit-box',
    }); }, [contentEllipseLines]);
    var styles = react_1.default.useMemo(function () {
        switch (contentEllipseMode) {
            case ContentEllipseMode.Lines:
                return ellipsesLinesStyle;
            case ContentEllipseMode.Normal:
                return VirtualizedTable_1.ellipsesStyle;
            case ContentEllipseMode.None:
            default:
                return null;
        }
    }, [ellipsesLinesStyle]);
    return react_1.default.createElement(Root_1.default, __assign({}, rest),
        isLoading === false && react_1.default.createElement(material_1.Box, { sx: styles }, children),
        isLoading && react_1.default.createElement(Loading_1.default, null));
};
exports.default = Default;
