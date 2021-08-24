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
import useCurrency from '../../Effect/useCurrency';
import Editor from './Editor';
import Display from './Display';
const PriceField = (_a) => {
    var { currency = useCurrency(), value = 0.0, selectOnFocus = true } = _a, props = __rest(_a, ["currency", "value", "selectOnFocus"]);
    const [_focused, setFocused] = React.useState(props.focused);
    const _onBlur = React.useCallback(e => {
        var _a;
        (_a = props === null || props === void 0 ? void 0 : props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
        setFocused(false);
    }, [setFocused, props === null || props === void 0 ? void 0 : props.onBlur]);
    const _onFocus = React.useCallback(e => {
        var _a;
        setFocused(true);
        (_a = props === null || props === void 0 ? void 0 : props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }, [setFocused, selectOnFocus, props === null || props === void 0 ? void 0 : props.onFocus]);
    return _focused ? (React.createElement(Editor, Object.assign({}, props, { value: value, onChange: props.onChange, onBlur: _onBlur, selectOnFocus: selectOnFocus }))) : (React.createElement(Display, Object.assign({}, props, { value: value, onChange: props.onChange, onFocus: _onFocus })));
};
export default memo(PriceField);
