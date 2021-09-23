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
var useCurrency_1 = __importDefault(require("../../Effect/useCurrency"));
var Editor_1 = __importDefault(require("./Editor"));
var Display_1 = __importDefault(require("./Display"));
var PriceField = function (_a) {
    var _b = _a.currency, currency = _b === void 0 ? (0, useCurrency_1.default)() : _b, _c = _a.value, value = _c === void 0 ? 0.0 : _c, _d = _a.selectOnFocus, selectOnFocus = _d === void 0 ? true : _d, _e = _a.showDecimals, showDecimals = _e === void 0 ? false : _e, props = __rest(_a, ["currency", "value", "selectOnFocus", "showDecimals"]);
    var _f = react_1.default.useState(props.focused), _focused = _f[0], setFocused = _f[1];
    var _onBlur = react_1.default.useCallback(function (e) {
        var _a;
        (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
        setFocused(false);
    }, [setFocused, props === null || props === void 0 ? void 0 : props.onBlur]);
    var _onFocus = react_1.default.useCallback(function (e) {
        var _a;
        setFocused(true);
        (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, [setFocused, selectOnFocus, props === null || props === void 0 ? void 0 : props.onFocus]);
    return _focused ? (react_1.default.createElement(Editor_1.default, __assign({ value: value, onChange: props.onChange, onBlur: _onBlur, selectOnFocus: selectOnFocus }, props))) : (react_1.default.createElement(Display_1.default, __assign({ value: value, onChange: props.onChange, showDecimals: showDecimals, onFocus: _onFocus }, props)));
};
exports.default = (0, react_1.memo)(PriceField);
