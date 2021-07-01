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
    var { currency = useCurrency(), value = 0.00, selectOnFocus = true } = _a, props = __rest(_a, ["currency", "value", "selectOnFocus"]);
    const { getCurrency } = Currency;
    const inputRef = React.useRef(null);
    const [sanitized, setSanitized] = React.useState(`${value}`);
    const [_focused, setFocused] = React.useState(props === null || props === void 0 ? void 0 : props.focused);
    const sanitize = React.useCallback(() => {
        setSanitized(parseFloat(sanitized.replace(Currency.replaceAllNonNumericOrSeperatorRegex, '')).toFixed(2));
    }, [setSanitized, sanitized]);
    const display = React.useMemo(() => getCurrency(currency, parseFloat(sanitized), true), [sanitized, currency]);
    const _onBlur = React.useCallback((e) => {
        var _a;
        setFocused(false);
        sanitize();
        (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, [setFocused, setSanitized, sanitized, props === null || props === void 0 ? void 0 : props.onBlur]);
    const _onFocus = React.useCallback((e) => {
        var _a;
        setFocused(true);
        (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, [setFocused, props === null || props === void 0 ? void 0 : props.onFocus, selectOnFocus, inputRef]);
    React.useEffect(() => {
        var _a;
        if (_focused) {
            if (inputRef.current && selectOnFocus) {
                (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
            }
        }
    }, [_focused]);
    React.useEffect(() => {
        setSanitized(`${value}`);
    }, [value]);
    return (React.createElement(MUITextField, Object.assign({ inputRef: inputRef, value: _focused ? sanitized : display, onBlur: _onBlur, onFocus: _onFocus }, props)));
};
export default TextField;
