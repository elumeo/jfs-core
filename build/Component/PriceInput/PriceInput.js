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
var TextField_1 = __importDefault(require("../TextField"));
var usePriceFieldAdornment_1 = __importStar(require("../../Effect/usePriceFieldAdornment"));
var Format_1 = require("../../Utilities/Format");
var react_intl_1 = require("react-intl");
var Locale_1 = require("../../Utilities/Format/Locale");
var Language_1 = require("../../Types/Language");
var lodash_1 = require("lodash");
var PriceInput_helper_1 = require("./PriceInput.helper");
var Number_1 = require("../../Utilities/Format/Number");
var PriceField = function (_a) {
    var _b;
    var _c;
    var _d = _a.currency, currency = _d === void 0 ? 'eur' : _d, valueInCent = _a.valueInCent, _e = _a.language, language = _e === void 0 ? Language_1.LANGUAGE.GERMAN : _e, _f = _a.selectOnFocus, selectOnFocus = _f === void 0 ? false : _f, _g = _a.showDecimals, showDecimals = _g === void 0 ? false : _g, _h = _a.min, min = _h === void 0 ? -Infinity : _h, _j = _a.max, max = _j === void 0 ? Infinity : _j, _k = _a.textFieldProps, _l = _k === void 0 ? { required: false } : _k, required = _l.required, textFieldProps = __rest(_l, ["required"]), _m = _a.currencyPosition, currencyPosition = _m === void 0 ? usePriceFieldAdornment_1.AdornmentPosition.end : _m, setValue = _a.setValue;
    var _o = (0, usePriceFieldAdornment_1.default)(currencyPosition), position = _o[0], at = _o[1];
    var _p = (0, react_intl_1.useIntl)(), formatNumber = _p.formatNumber, formatMessage = _p.formatMessage;
    var locale = (0, Locale_1.mapLanguageToLocale)(language);
    var fraction = showDecimals ? 2 : 0;
    var toLocaleStringFractionOptions = { minimumFractionDigits: fraction, maximumFractionDigits: fraction };
    var _q = react_1.default.useState(((_c = (0, Number_1.divideBy100)(valueInCent, showDecimals)) !== null && _c !== void 0 ? _c : '').toLocaleString(locale, __assign({ style: 'decimal', useGrouping: true }, toLocaleStringFractionOptions))), localValue = _q[0], setLocalValue = _q[1];
    var decimalSeparator = (1.1).toLocaleString(locale).substring(1, 2);
    var groupingSeparator = (1000).toLocaleString(locale).substring(1, 2);
    var outOfRange = (!!valueInCent)
        && ((min !== -Infinity && valueInCent < min) || (max !== Infinity && valueInCent > max));
    var isLocalValueValid = (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals);
    var hasErrors = !isLocalValueValid || outOfRange;
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (valueInCent === null) {
            setLocalValue(null);
        }
        else {
            var prepared = ((_a = (0, Number_1.divideBy100)(valueInCent, showDecimals)) !== null && _a !== void 0 ? _a : '').toLocaleString(locale, __assign({ style: 'decimal', useGrouping: false }, toLocaleStringFractionOptions));
            var _isValidValue = (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals);
            if (!_isValidValue || (0, PriceInput_helper_1.sanitize)(localValue, decimalSeparator) !== (0, PriceInput_helper_1.sanitize)(prepared, decimalSeparator)) {
                setLocalValue(((_b = (0, Number_1.divideBy100)(valueInCent, showDecimals)) !== null && _b !== void 0 ? _b : '').toLocaleString(locale, __assign({ style: 'decimal', useGrouping: true }, toLocaleStringFractionOptions)));
            }
        }
    }, [valueInCent]);
    var _onChange = function (e) {
        var euroValue = e.target.value;
        var _localValue = euroValue ? (euroValue).replace(/[^0-9.,-]*/g, '') : null;
        var _sanitizedValue = (0, PriceInput_helper_1.sanitize)(_localValue, decimalSeparator);
        var _isValidValue = _sanitizedValue ? (0, Number_1.isValidLocalisedNumber)(_localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
        setLocalValue(_localValue);
        if (_sanitizedValue && _isValidValue || _localValue == null) {
            setValue(_localValue == null ? null : (0, lodash_1.parseInt)(_sanitizedValue));
        }
    };
    var _onBlur = function () {
        var _sanitizedValue = (0, PriceInput_helper_1.sanitize)(localValue, decimalSeparator);
        var _isValidValue = _sanitizedValue ? (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
        var parsedValue = !_sanitizedValue || !_isValidValue ? null : (0, lodash_1.parseInt)(_sanitizedValue);
        if (parsedValue !== null) {
            var localizedValue = (0, Number_1.divideBy100)(parsedValue, showDecimals).toLocaleString(locale, __assign({ style: 'decimal' }, toLocaleStringFractionOptions));
            setLocalValue(localizedValue);
        }
        else {
            setValue(valueInCent);
            setLocalValue(!(0, Number_1.divideBy100)(valueInCent, showDecimals) ? null : (0, Number_1.divideBy100)(valueInCent, showDecimals).toLocaleString(locale, __assign({ style: 'decimal', useGrouping: true }, toLocaleStringFractionOptions)));
        }
    };
    var _onFocus = function () {
        var _sanitizedValue = (0, PriceInput_helper_1.sanitize)(localValue, decimalSeparator);
        var _isValidValue = _sanitizedValue ? (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
        var parsedValue = !_sanitizedValue || !_isValidValue ? null : (0, lodash_1.parseInt)(_sanitizedValue);
        if (parsedValue !== null) {
            var localizedValue = (0, Number_1.divideBy100)(parsedValue, showDecimals).toLocaleString(locale, __assign({ style: 'decimal', useGrouping: false }, toLocaleStringFractionOptions));
            setLocalValue(localizedValue);
        }
    };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(TextField_1.default, __assign({ required: required }, textFieldProps, { helperText: hasErrors
                ? outOfRange
                    ? "min: ".concat(formatNumber(min / 100, __assign({}, toLocaleStringFractionOptions)), " max: ").concat(formatNumber(max / 100, __assign({}, toLocaleStringFractionOptions)))
                    : formatMessage({ id: 'priceField.invalid' })
                : textFieldProps.helperText, value: localValue, selectOnFocus: selectOnFocus, error: hasErrors, onFocus: _onFocus, onBlur: _onBlur, onChange: _onChange, InputProps: (_b = {},
                _b[position] = (0, jsx_runtime_1.jsx)(material_1.InputAdornment, __assign({ position: at }, { children: Format_1.Currency.getCurrencySign(currency) })),
                _b) })) });
};
exports.default = PriceField;
