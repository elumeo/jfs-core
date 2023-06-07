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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var TextField_1 = __importDefault(require("../TextField"));
var useCurrency_1 = __importDefault(require("../../Effect/useCurrency"));
var usePriceFieldAdornment_1 = __importDefault(require("../../Effect/usePriceFieldAdornment"));
var Format_1 = require("../../Utilities/Format");
var PriceField = function (_a) {
    var _b = _a.currency, currency = _b === void 0 ? 'eur' : _b, _c = _a.value, value = _c === void 0 ? 0.0 : _c, _d = _a.selectOnFocus, selectOnFocus = _d === void 0 ? true : _d, _e = _a.showDecimals, showDecimals = _e === void 0 ? true : _e, min = _a.min, max = _a.max, props = __rest(_a, ["currency", "value", "selectOnFocus", "showDecimals", "min", "max"]);
    var configCurrency = (0, useCurrency_1.default)();
    var ref = react_1.default.useRef(null);
    var finalCurrency = currency !== null && currency !== void 0 ? currency : configCurrency;
    var display = value === ''
        ? ''
        : Format_1.Currency.getCurrency(finalCurrency, isNaN(Number(value))
            ? 0
            : Number(value), true, false, showDecimals);
    var _f = (0, usePriceFieldAdornment_1.default)(finalCurrency), adornmentType = _f[0], adornmentPosition = _f[1], styles = _f[2];
    var _g = react_1.default.useState(props.focused), _focused = _g[0], setFocused = _g[1];
    react_1.default.useEffect(function () {
        if (selectOnFocus && _focused) {
            ref.current.select();
        }
    }, [_focused, selectOnFocus]);
    var _onFocus = react_1.default.useCallback(function (event) {
        var _a;
        setFocused(true);
        (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, event);
    }, [props === null || props === void 0 ? void 0 : props.onFocus, setFocused, selectOnFocus]);
    var _onBlur = react_1.default.useCallback(function (event) {
        var _a;
        (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, event);
        setFocused(false);
        if (isNaN(parseFloat(value))) {
            props.onChange(__assign(__assign({}, event), { target: __assign(__assign({}, event.target), { value: null }) }));
        }
    }, [setFocused, props === null || props === void 0 ? void 0 : props.onBlur, value]);
    var _onChange = react_1.default.useCallback(function (event) {
        var _a;
        var _value = event.target.value;
        (_a = props === null || props === void 0 ? void 0 : props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, __assign(__assign({}, event), { target: __assign(__assign({}, event.target), { value: "".concat(Format_1.Number.parse(_value, min, max)) }) }));
    }, [props === null || props === void 0 ? void 0 : props.onChange, min, max,]);
    var _InputProps = react_1.default.useMemo(function () {
        var _a;
        return (__assign((_a = {}, _a[adornmentType] = (0, jsx_runtime_1.jsx)(material_1.InputAdornment, __assign({ position: adornmentPosition, sx: styles }, { children: Format_1.Currency.getCurrencySign(currency) })), _a), props === null || props === void 0 ? void 0 : props.InputProps));
    }, [adornmentPosition, adornmentType, currency, props === null || props === void 0 ? void 0 : props.InputProps, styles]);
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, __assign({ inputRef: ref, value: _focused ? value : display, InputProps: _InputProps, onChange: _onChange, onFocus: _onFocus, onBlur: _onBlur }, props)));
};
exports.default = PriceField;
