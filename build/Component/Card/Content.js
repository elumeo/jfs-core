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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Content = function (_a) {
    var _b = _a.fullHeight, fullHeight = _b === void 0 ? false : _b, _c = _a.withSubtitle, withSubtitle = _c === void 0 ? false : _c, _d = _a.overrideCardTitleHeight, overrideCardTitleHeight = _d === void 0 ? null : _d, rest = __rest(_a, ["fullHeight", "withSubtitle", "overrideCardTitleHeight"]);
    var theme = (0, styles_1.useTheme)();
    var sx = (0, react_1.useMemo)(function () { return ({
        flexDirection: 'column',
        height: overrideCardTitleHeight !== null ? overrideCardTitleHeight : fullHeight
            ? 'calc(100% - ' + (withSubtitle ? theme.spacing(10.5) : theme.spacing(7)) + ')'
            : 'initial'
    }); }, [fullHeight, withSubtitle, overrideCardTitleHeight]);
    return (0, jsx_runtime_1.jsx)(material_1.CardContent, __assign({ sx: sx }, rest));
};
exports.default = Content;
