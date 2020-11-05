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
import React, { useState, useEffect, useRef } from 'react';
import { TextField } from 'react-md';
import Currency from '../../Utilities/Format/Currency';
import uuid from 'uuid';
const PriceInput = (_a) => {
    var { id = `price-input-${uuid()}`, selectOnFocus, value, onChange, label, error, currency, errorText, inputClassName = '', className = 'price-input', helpText, min, max } = _a, rest = __rest(_a, ["id", "selectOnFocus", "value", "onChange", "label", "error", "currency", "errorText", "inputClassName", "className", "helpText", "min", "max"]);
    const { getCurrency: currencyFormatter } = Currency;
    const [localValue, setLocalValue] = useState('');
    const inputref = useRef(null);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        if (value) {
            setLocalValue(parseFloat(value.toString()).toFixed(2));
        }
    }, [value]);
    useEffect(() => {
        var _a, _b, _c, _d, _e, _f;
        if (selectOnFocus) {
            if (focused && ((_c = (_b = (_a = inputref === null || inputref === void 0 ? void 0 : inputref.current) === null || _a === void 0 ? void 0 : _a.getField) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.select)) {
                (_f = (_e = (_d = inputref === null || inputref === void 0 ? void 0 : inputref.current) === null || _d === void 0 ? void 0 : _d.getField) === null || _e === void 0 ? void 0 : _e.call(_d)) === null || _f === void 0 ? void 0 : _f.select();
            }
        }
    }, [inputref === null || inputref === void 0 ? void 0 : inputref.current, selectOnFocus, focused]);
    const _onChange = (e, ev) => {
        setLocalValue(e.toString().replace(Currency.replaceAllNonNumericOrSeperatorRegex, ''));
    };
    const submitValue = () => {
        const formattedValue = parseFloat(parseFloat(localValue
            .toString()
            .replace(Currency.intlDecSeparator, '.'))
            .toFixed(2));
        if (!isNaN(formattedValue)) {
            if (!!min && formattedValue < min) {
                onChange(min.toFixed(2), null);
            }
            else if (!!max && (formattedValue > max)) {
                onChange(max.toFixed(2), null);
            }
            else {
                onChange(formattedValue, null);
            }
            setLocalValue(formattedValue.toString());
        }
        else {
            onChange(0, null);
        }
    };
    return (React.createElement(TextField, Object.assign({ ref: inputref, id: id, value: focused ? localValue : currencyFormatter(currency, value, true), onFocus: () => {
            setFocused(true);
        }, onBlur: (e) => {
            setFocused(false);
            submitValue();
        }, inputClassName: inputClassName, className: className, onChange: _onChange, label: label, error: error, errorText: errorText, helpText: helpText }, rest)));
};
export default PriceInput;
//# sourceMappingURL=index.js.map