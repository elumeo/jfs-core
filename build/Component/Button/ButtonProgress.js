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
exports.mapToCircularProgressColor = exports.mapToCircularProgressSize = exports.wrapperStyles = void 0;
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
exports.wrapperStyles = {
    position: 'relative',
    display: 'inline'
};
var mapToCircularProgressSize = function (size) {
    switch (size) {
        case 'large':
            return 28;
        case 'small':
            return 20;
        default:
            return 24;
    }
};
exports.mapToCircularProgressSize = mapToCircularProgressSize;
var mapToCircularProgressColor = function (color) { return color === 'default' ? 'inherit' : color; };
exports.mapToCircularProgressColor = mapToCircularProgressColor;
var getSpinnerSx = function (size) {
    if (size === void 0) { size = 'medium'; }
    return ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: (0, exports.mapToCircularProgressSize)(size) / 2 * -1 + 'px',
        marginLeft: (0, exports.mapToCircularProgressSize)(size) / 2 * -1 + 'px',
    });
};
var ButtonProgress = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, onClick = _a.onClick, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.color, color = _c === void 0 ? 'inherit' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.inProgress, inProgress = _e === void 0 ? false : _e, _f = _a.spinnerColor, spinnerColor = _f === void 0 ? undefined : _f, rest = __rest(_a, ["children", "onClick", "size", "color", "disabled", "inProgress", "spinnerColor"]);
    return (0, jsx_runtime_1.jsxs)(material_1.Button, __assign({ ref: ref, size: size, color: color, disabled: disabled || inProgress, onClick: onClick }, rest, { children: [children, inProgress
                ? (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { size: (0, exports.mapToCircularProgressSize)(size), color: spinnerColor || color, sx: getSpinnerSx(size) })
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] }));
});
exports.default = ButtonProgress;
