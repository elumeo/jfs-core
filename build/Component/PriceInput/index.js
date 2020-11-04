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
import React, { useState, useEffect } from 'react';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { TextField } from 'react-md';
import Currency from '../../Utilities/Format/Currency';
import uuid from 'uuid';
const PriceInput = (_a) => {
    var { id = `price-input-${uuid()}`, selectValue, value, onChange, label, error, currency, errorText, inputClassName = '', className = 'price-input', helpText, min, max } = _a, rest = __rest(_a, ["id", "selectValue", "value", "onChange", "label", "error", "currency", "errorText", "inputClassName", "className", "helpText", "min", "max"]);
    const { getCurrency: currencyFormatter } = Currency;
    const [localValue, setLocalValue] = useState('');
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        if (value) {
            setLocalValue(parseFloat(value.toString()).toFixed(2));
        }
    }, [value]);
    useEffect(() => {
        if (selectValue) {
            refTextFieldInput.focus();
            refTextFieldInput.getField().select();
        }
    }, []);
    let refTextFieldInput; // ToDo: What is the correct type? => React.Component<TextFieldProps, any, any>;
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
    return (React.createElement(TextField, Object.assign({ ref: field => refTextFieldInput = field, id: id, value: focused ? localValue : currencyFormatter(currency, value, true), onFocus: () => {
            setFocused(true);
        }, onBlur: (e) => {
            setFocused(false);
            submitValue();
        }, inputClassName: inputClassName, className: className, onChange: _onChange, label: label, error: error, errorText: errorText, helpText: helpText }, rest)));
};
const enhance = compose(injectIntl);
export default enhance(PriceInput);
//# sourceMappingURL=index.js.map