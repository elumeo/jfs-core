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
/* eslint-disable max-lines */
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ValueRenderer_1 = __importDefault(require("./ValueRenderer"));
var CustomInput_1 = __importDefault(require("./CustomInput"));
var Flex_1 = __importDefault(require("../Layout/Flex"));
var icons_material_1 = require("@mui/icons-material");
var SelectClearButton = function (_a) {
    var _b, _c;
    var onChange = _a.onChange, _d = _a.renderAsChip, renderAsChip = _d === void 0 ? true : _d, value = _a.value, _e = _a.variant, variant = _e === void 0 ? 'outlined' : _e, _f = _a.canClear, canClear = _f === void 0 ? true : _f, _g = _a.canUnselect, canUnselect = _g === void 0 ? true : _g, label = _a.label, _h = _a.color, color = _h === void 0 ? 'secondary' : _h, _j = _a.chipProps, chipProps = _j === void 0 ? {} : _j, _k = _a.inputProps, inputProps = _k === void 0 ? {} : _k, children = _a.children, options = _a.options, _l = _a.maxValuesToDisplayInInput, maxValuesToDisplayInInput = _l === void 0 ? 2 : _l, _m = _a.loading, loading = _m === void 0 ? false : _m, _o = _a.loadingSize, loadingSize = _o === void 0 ? 20 : _o, _p = _a.selectProps, selectProps = _p === void 0 ? {} : _p, helperText = _a.helperText, rest = __rest(_a, ["onChange", "renderAsChip", "value", "variant", "canClear", "canUnselect", "label", "color", "chipProps", "inputProps", "children", "options", "maxValuesToDisplayInInput", "loading", "loadingSize", "selectProps", "helperText"]);
    var labelId = react_1.default.useId();
    var _q = react_1.default.useState(false), isOpen = _q[0], setIsOpen = _q[1];
    var multiple = rest === null || rest === void 0 ? void 0 : rest.multiple;
    var labelsByValue = react_1.default.useMemo(function () {
        return (options !== null && options !== void 0 ? options : []).reduce(function (acc, o) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[o.value] = o.label, _a)));
        }, {});
    }, [options]);
    var values = react_1.default.useMemo(function () {
        return !value ? []
            : Array.isArray(value)
                ? value
                : [value];
    }, [value]);
    var unselect = react_1.default.useCallback(function (v) {
        return onChange(multiple
            ? values.filter(function (vv) { return vv !== v; })
            : null);
    }, [values, onChange, multiple]);
    var open = react_1.default.useCallback(function () { return setIsOpen(true); }, [setIsOpen]);
    var close = react_1.default.useCallback(function () { return setIsOpen(false); }, [setIsOpen]);
    return react_1.default.createElement(material_1.FormControl, __assign({ fullWidth: true }, rest),
        label && react_1.default.createElement(material_1.InputLabel, { color: (_b = selectProps === null || selectProps === void 0 ? void 0 : selectProps.color) !== null && _b !== void 0 ? _b : color, id: labelId }, label),
        react_1.default.createElement(material_1.Select, __assign({ labelId: labelId, value: value !== null && value !== void 0 ? value : (multiple ? [] : ''), multiple: multiple, color: (_c = selectProps === null || selectProps === void 0 ? void 0 : selectProps.color) !== null && _c !== void 0 ? _c : color, open: isOpen, onOpen: open, onClose: close, IconComponent: function () { return isOpen
                ? react_1.default.createElement(material_1.IconButton, { disabled: selectProps.disabled, color: 'inherit', disableRipple: true, onClick: open },
                    react_1.default.createElement(icons_material_1.ArrowDropUp, { color: 'inherit' }))
                : react_1.default.createElement(material_1.IconButton, { disabled: selectProps.disabled, color: 'inherit', disableRipple: true, onClick: open },
                    react_1.default.createElement(icons_material_1.ArrowDropDown, { color: 'inherit' })); }, onChange: function (e) { return onChange(e.target.value); }, input: react_1.default.createElement(CustomInput_1.default, __assign({ label: label, variant: variant, helperText: helperText, color: color, canClear: canClear && values.length > 0, onClear: function () { return onChange((multiple ? [] : null)); } }, inputProps)) }, selectProps, { renderValue: function () {
                return react_1.default.createElement(ValueRenderer_1.default, __assign({ values: values, labelsByValue: labelsByValue, renderAsChip: renderAsChip, maxValuesToDisplayInInput: maxValuesToDisplayInInput, onClick: open, canUnselect: canUnselect, unselect: unselect }, chipProps, { size: 'small' }));
            } }), loading
            ? (react_1.default.createElement(Flex_1.default, { alignItems: 'center' },
                react_1.default.createElement(material_1.CircularProgress, { size: loadingSize, color: color })))
            : children || options.map(function (option) {
                return react_1.default.createElement(material_1.MenuItem, { key: 'select-menu-item-' + option.value, value: option.value, color: color, disabled: option.disabled, selected: multiple
                        ? value.includes(option.value)
                        : value === option.value },
                    multiple &&
                        react_1.default.createElement(material_1.Checkbox, { color: color, checked: value.includes(option.value), size: 'small' }),
                    option.label);
            })));
};
exports.default = SelectClearButton;
