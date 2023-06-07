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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
var TextField = react_1.default.forwardRef(function (_a, ref) {
    var _b;
    var _c = _a.clearButtonSize, clearButtonSize = _c === void 0 ? 'small' : _c, _d = _a.clearIconSize, clearIconSize = _d === void 0 ? 'small' : _d, _e = _a.value, value = _e === void 0 ? null : _e, hideClearButton = _a.hideClearButton, forceEnableClearButton = _a.forceEnableClearButton, clearButtonProps = _a.clearButtonProps, name = _a.name, props = __rest(_a, ["clearButtonSize", "clearIconSize", "value", "hideClearButton", "forceEnableClearButton", "clearButtonProps", "name"]);
    var isDirty = value !== null && value !== undefined && value !== '';
    var clear = react_1.default.useCallback(function () {
        var _a;
        (_a = props === null || props === void 0 ? void 0 : props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, { target: { value: null } });
    }, [props.onChange]);
    var endAdornmentClearButton = react_1.default.useMemo(function () { return (forceEnableClearButton || isDirty) && !hideClearButton ? ((0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ disabled: props.disabled && !forceEnableClearButton, size: clearButtonSize, color: 'secondary', onClick: clear }, clearButtonProps, { children: (0, jsx_runtime_1.jsx)(Clear_1.default, { fontSize: clearIconSize }) })))
        : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}); }, [isDirty, props.disabled, clearButtonProps, clearButtonSize, forceEnableClearButton, clearIconSize, clear, hideClearButton]);
    var preparedInputProps = (0, react_1.useMemo)(function () {
        var _a, _b;
        return (__assign(__assign({}, props === null || props === void 0 ? void 0 : props.InputProps), { endAdornment: (0, jsx_runtime_1.jsxs)(material_1.InputAdornment, __assign({ position: 'end' }, { children: [(_b = (_a = props === null || props === void 0 ? void 0 : props.InputProps) === null || _a === void 0 ? void 0 : _a.endAdornment) !== null && _b !== void 0 ? _b : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}), endAdornmentClearButton] })) }));
    }, [endAdornmentClearButton, (_b = props === null || props === void 0 ? void 0 : props.InputProps) === null || _b === void 0 ? void 0 : _b.endAdornment, hideClearButton]);
    var onChange = react_1.default.useCallback(function (e) {
        props.onChange(e);
    }, [props.onChange]);
    return (0, jsx_runtime_1.jsx)(material_1.TextField, __assign({ ref: ref, name: name, value: value || '' }, props, { onChange: onChange, InputProps: preparedInputProps }));
});
exports.default = TextField;
