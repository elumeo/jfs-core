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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Definition_1 = __importDefault(require("./Stateless/Style/Theme/Definition"));
var gridContainerSx = ({
    height: '100%',
    maxHeight: "calc(100vh - ".concat(Definition_1.default.mixins.toolbar.minHeight, "px)"),
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
});
var AppLayout = function (_a) {
    var _b;
    var children = _a.children, _c = _a.navigation, navigation = _c === void 0 ? null : _c, _d = _a.spacing, spacing = _d === void 0 ? 1 : _d, _e = _a.contentProps, contentProps = _e === void 0 ? {} : _e, _f = _a.fullWidth, fullWidth = _f === void 0 ? false : _f, containerProps = __rest(_a, ["children", "navigation", "spacing", "contentProps", "fullWidth"]);
    return (react_1.default.createElement(material_1.Stack, __assign({ p: spacing, sx: __assign(__assign({}, gridContainerSx), (_b = containerProps === null || containerProps === void 0 ? void 0 : containerProps.sx) !== null && _b !== void 0 ? _b : {}), spacing: spacing, direction: 'row', gap: (navigation && spacing > 0) ? spacing : 0 }, containerProps),
        navigation,
        react_1.default.createElement(material_1.Box, __assign({}, contentProps, { sx: { marginLeft: '0 !important', width: fullWidth ? '100%' : 'auto' } }), children)));
};
exports.default = AppLayout;
