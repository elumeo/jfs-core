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
exports.mapToCircularProgressColor = exports.mapToCircularProgressSize = exports.wrapperStyles = void 0;
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
exports.wrapperStyles = { position: 'relative', display: 'inline-block' };
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
        marginTop: (0, exports.mapToCircularProgressSize)(size) / 2 * -1,
        marginLeft: (0, exports.mapToCircularProgressSize)(size) / 2 * -1
    });
};
var ButtonProgress = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, onClick = _a.onClick, _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.color, color = _c === void 0 ? 'inherit' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.inProgress, inProgress = _e === void 0 ? false : _e, rest = __rest(_a, ["children", "onClick", "size", "color", "disabled", "inProgress"]);
    return react_1.default.createElement(material_1.Box, { sx: exports.wrapperStyles },
        react_1.default.createElement(material_1.Button, __assign({ ref: ref, size: size, color: color, disabled: disabled || inProgress, onClick: onClick }, rest), children),
        inProgress && react_1.default.createElement(material_1.CircularProgress, { size: (0, exports.mapToCircularProgressSize)(size), color: (0, exports.mapToCircularProgressColor)(color), sx: getSpinnerSx(size) }));
});
exports.default = ButtonProgress;
