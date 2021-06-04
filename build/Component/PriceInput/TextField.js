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
import React from 'react';
import { default as MUITextField } from '@material-ui/core/TextField';
import useCurrency from '../../Effect/useCurrency';
import { Currency } from '../../Utilities/Format';
const TextField = (_a) => {
    var { currency = useCurrency(), value = 0.00 } = _a, rest = __rest(_a, ["currency", "value"]);
    const { getCurrency } = Currency;
    const inputRef = React.useRef();
    const [sanitized, setSanitized] = React.useState(`${value}`);
    const [_focused, setFocused] = React.useState(rest.focused);
    const sanitize = React.useCallback(() => {
        setSanitized(parseFloat(sanitized.replace(Currency.replaceAllNonNumericOrSeperatorRegex, '')).toFixed(2));
    }, [setSanitized, sanitized]);
    const display = React.useMemo(() => getCurrency(currency, parseFloat(sanitized), true), [sanitized, currency]);
    const _onBlur = React.useCallback((e) => {
        var _a;
        setFocused(false);
        sanitize();
        (_a = rest === null || rest === void 0 ? void 0 : rest.onBlur) === null || _a === void 0 ? void 0 : _a.call(rest, e);
    }, [setFocused, setSanitized, sanitized, rest === null || rest === void 0 ? void 0 : rest.onBlur]);
    const _onFocus = React.useCallback((e) => {
        var _a;
        setFocused(true);
        (_a = rest === null || rest === void 0 ? void 0 : rest.onFocus) === null || _a === void 0 ? void 0 : _a.call(rest, e);
    }, [setFocused, rest === null || rest === void 0 ? void 0 : rest.onFocus]);
    React.useEffect(() => {
        setSanitized(`${value}`);
    }, [value]);
    return (React.createElement(MUITextField, Object.assign({ ref: inputRef, value: _focused ? sanitized : display, onBlur: _onBlur, onFocus: _onFocus }, rest)));
};
export default TextField;
