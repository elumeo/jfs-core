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
import React, { memo } from 'react';
import { TextField, InputAdornment, } from '@material-ui/core';
import useCurrency from '../../Effect/useCurrency';
import { Currency } from '../../Utilities/Format';
const Display = (_a) => {
    var { currency = useCurrency(), value = 0.0 } = _a, props = __rest(_a, ["currency", "value"]);
    const sanitized = React.useMemo(() => Currency.formatDisplay(value), [value]);
    const display = React.useMemo(() => Currency.getCurrency(currency, parseFloat(sanitized), true, false), [sanitized, currency]);
    return (React.createElement(TextField, Object.assign({}, props, { value: display, InputProps: {
            [currency.toLowerCase() === 'eur'
                ? 'endAdornment'
                : 'startAdornment']: (React.createElement(InputAdornment, { position: currency.toLowerCase() === 'eur' ? 'end' : 'start', style: { userSelect: 'none' } }, Currency.getCurrencySign(currency))),
        } })));
};
export default memo(Display);
