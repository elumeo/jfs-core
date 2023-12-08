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
var Definition_1 = __importDefault(require("../App/Stateless/Style/Theme/Definition"));
var PriceField = function (_a) {
    var _b;
    var _c = _a.currency, currency = _c === void 0 ? 'eur' : _c, valueInCent = _a.valueInCent, _d = _a.language, language = _d === void 0 ? Language_1.LANGUAGE.GERMAN : _d, _e = _a.selectOnFocus, selectOnFocus = _e === void 0 ? false : _e, _f = _a.showDecimals, showDecimals = _f === void 0 ? false : _f, _g = _a.min, min = _g === void 0 ? Number.NEGATIVE_INFINITY : _g, _h = _a.max, max = _h === void 0 ? Number.POSITIVE_INFINITY : _h, textFieldProps = _a.textFieldProps, _j = _a.currencyPosition, currencyPosition = _j === void 0 ? usePriceFieldAdornment_1.AdornmentPosition.end : _j, disabled = _a.disabled, setValue = _a.setValue, required = _a.required;
    var _k = (0, usePriceFieldAdornment_1.default)(currencyPosition), position = _k[0], at = _k[1];
    var _l = (0, react_intl_1.useIntl)(), formatNumber = _l.formatNumber, formatMessage = _l.formatMessage;
    var locale = (0, Locale_1.mapLanguageToLocale)(language);
    var _m = react_1.default.useState((0, PriceInput_helper_1.getLocaleString)(locale, (0, Number_1.divideBy100)(valueInCent, showDecimals), true, showDecimals)), localValue = _m[0], setLocalValue = _m[1];
    var decimalSeparator = (0, Number_1.getDecimalSeparator)(locale);
    var groupingSeparator = (0, Number_1.getGroupingSeparator)(locale);
    var outOfRange = (!!valueInCent)
        && ((min !== -Infinity && valueInCent < min) || (max !== Infinity && valueInCent > max));
    var isLocalValueValid = (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals) || (!required && (localValue == null || localValue == ''));
    var hasErrors = !isLocalValueValid || outOfRange;
    (0, react_1.useEffect)(function () {
        if (valueInCent === null) {
            setLocalValue(null);
        }
        else {
            var prepared = (0, PriceInput_helper_1.getLocaleString)(locale, (0, Number_1.divideBy100)(valueInCent, showDecimals), false, showDecimals);
            var _isValidValue = (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals);
            if (!_isValidValue || (0, PriceInput_helper_1.sanitize)(localValue, decimalSeparator) !== (0, PriceInput_helper_1.sanitize)(prepared, decimalSeparator)) {
                setLocalValue((0, PriceInput_helper_1.getLocaleString)(locale, (0, Number_1.divideBy100)(valueInCent, showDecimals), true, showDecimals));
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
            var localizedValue = (0, PriceInput_helper_1.getLocaleString)(locale, (0, Number_1.divideBy100)(parsedValue, showDecimals), true, showDecimals);
            setLocalValue(localizedValue);
        }
        else {
            setValue(valueInCent);
            setLocalValue(!(0, Number_1.divideBy100)(valueInCent, showDecimals)
                ? null
                : (0, PriceInput_helper_1.getLocaleString)(locale, (0, Number_1.divideBy100)(valueInCent, showDecimals), true, showDecimals));
        }
    };
    var _onFocus = function () {
        var _sanitizedValue = (0, PriceInput_helper_1.sanitize)(localValue, decimalSeparator);
        var _isValidValue = _sanitizedValue ? (0, Number_1.isValidLocalisedNumber)(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
        var parsedValue = !_sanitizedValue || !_isValidValue ? null : (0, lodash_1.parseInt)(_sanitizedValue);
        if (parsedValue !== null) {
            var localizedValue = (0, PriceInput_helper_1.getLocaleString)(locale, (0, Number_1.divideBy100)(parsedValue, showDecimals), false, showDecimals);
            setLocalValue(localizedValue);
        }
    };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(TextField_1.default, __assign({}, textFieldProps, { helperText: hasErrors
                ? outOfRange
                    ? "min: ".concat(formatNumber(min / 100, __assign({}, (0, PriceInput_helper_1.toLocaleStringFractionOptions)(showDecimals ? 2 : 0))), " max: ").concat(formatNumber(max / 100, __assign({}, (0, PriceInput_helper_1.toLocaleStringFractionOptions)(showDecimals ? 2 : 0))))
                    : formatMessage({ id: 'priceField.invalid' })
                : textFieldProps.helperText, value: localValue, selectOnFocus: selectOnFocus, error: hasErrors, required: required, onFocus: _onFocus, onBlur: _onBlur, onChange: _onChange, hideClearButton: disabled, InputProps: (_b = {},
                _b[position] = (0, jsx_runtime_1.jsx)(material_1.InputAdornment, __assign({ position: at }, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ color: disabled
                            ? Definition_1.default.palette.text.disabled
                            : 'inherit' }, { children: Format_1.Currency.getCurrencySign(currency) })) })),
                _b), disabled: disabled })) });
};
exports.default = PriceField;
