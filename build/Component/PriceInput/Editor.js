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
const Editor = (_a) => {
    var { currency = useCurrency(), value = 0.0, selectOnFocus = true, min = null, max = null } = _a, props = __rest(_a, ["currency", "value", "selectOnFocus", "min", "max"]);
    const sanitized = React.useMemo(() => Currency.formatDisplay(value, min, max), [value, min, max]);
    const onFocus = React.useCallback(e => {
        if (selectOnFocus) {
            e.target.select();
        }
    }, [selectOnFocus]);
    const _onBlur = e => {
        var _a, _b;
        (_a = props === null || props === void 0 ? void 0 : props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, { target: { value: sanitized } });
        (_b = props === null || props === void 0 ? void 0 : props.onBlur) === null || _b === void 0 ? void 0 : _b.call(props, e);
    };
    return (React.createElement(TextField, Object.assign({}, props, { value: value, autoFocus: true, onFocus: onFocus, onBlur: _onBlur, InputProps: {
            [currency.toLowerCase() === 'eur'
                ? 'endAdornment'
                : 'startAdornment']: (React.createElement(InputAdornment, { position: currency.toLowerCase() === 'eur' ? 'end' : 'start', style: { userSelect: 'none' } }, Currency.getCurrencySign(currency))),
        } })));
};
export default memo(Editor);
