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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var ValueRenderer_1 = __importDefault(require("./ValueRenderer"));
var CustomInput_1 = __importDefault(require("./CustomInput"));
var Flex_1 = __importDefault(require("../Layout/Flex"));
var icons_material_1 = require("@mui/icons-material");
var SelectClearButton = function (_a) {
    var onChange = _a.onChange, _b = _a.renderAsChip, renderAsChip = _b === void 0 ? true : _b, value = _a.value, _c = _a.variant, variant = _c === void 0 ? 'standard' : _c, _d = _a.canClear, canClear = _d === void 0 ? true : _d, _e = _a.canUnselect, canUnselect = _e === void 0 ? true : _e, label = _a.label, _f = _a.color, color = _f === void 0 ? 'secondary' : _f, _g = _a.chipProps, chipProps = _g === void 0 ? {} : _g, _h = _a.formControlProps, formControlProps = _h === void 0 ? {} : _h, _j = _a.inputProps, inputProps = _j === void 0 ? {} : _j, children = _a.children, options = _a.options, _k = _a.maxValuesToDisplayInInput, maxValuesToDisplayInInput = _k === void 0 ? 2 : _k, _l = _a.loading, loading = _l === void 0 ? false : _l, _m = _a.loadingSize, loadingSize = _m === void 0 ? 20 : _m, rest = __rest(_a, ["onChange", "renderAsChip", "value", "variant", "canClear", "canUnselect", "label", "color", "chipProps", "formControlProps", "inputProps", "children", "options", "maxValuesToDisplayInInput", "loading", "loadingSize"]);
    var labelId = react_1.default.useId();
    var _o = react_1.default.useState(false), isOpen = _o[0], setIsOpen = _o[1];
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
    return react_1.default.createElement(material_1.FormControl, __assign({ fullWidth: true }, formControlProps),
        label && react_1.default.createElement(material_1.InputLabel, { color: color, id: labelId }, label),
        react_1.default.createElement(material_1.Select, __assign({ labelId: labelId, value: value !== null && value !== void 0 ? value : (multiple ? [] : ''), multiple: multiple, MenuProps: {
                container: document.getElementById('overlay'),
            }, color: color, open: isOpen, onOpen: open, onClose: close, IconComponent: function () { return isOpen
                ? react_1.default.createElement(material_1.IconButton, { disableRipple: true, onClick: open },
                    react_1.default.createElement(icons_material_1.ArrowDropUp, { color: 'inherit' }))
                : react_1.default.createElement(material_1.IconButton, { disableRipple: true, onClick: open },
                    react_1.default.createElement(icons_material_1.ArrowDropDown, { color: 'inherit' })); }, onChange: function (e) { return onChange(e.target.value); }, input: react_1.default.createElement(CustomInput_1.default, __assign({ label: label, variant: variant, color: color, canClear: canClear && values.length > 0, onClear: function () { return onChange((multiple ? [] : null)); } }, inputProps)) }, rest, { renderValue: function () {
                return react_1.default.createElement(ValueRenderer_1.default, __assign({ values: values, labelsByValue: labelsByValue, renderAsChip: renderAsChip, maxValuesToDisplayInInput: maxValuesToDisplayInInput, onClick: open, canUnselect: canUnselect, unselect: unselect }, chipProps, { size: 'small' }));
            } }), loading
            ? (react_1.default.createElement(Flex_1.default, { alignItems: 'center' },
                react_1.default.createElement(material_1.CircularProgress, { size: loadingSize, color: color })))
            : children || options.map(function (option) {
                return react_1.default.createElement(material_1.MenuItem, { key: 'select-menu-item-' + option.value, value: option.value, color: color, TouchRippleProps: { color: color }, selected: Array.isArray(value)
                        ? value.includes(option.value)
                        : value === option.value },
                    multiple &&
                        react_1.default.createElement(material_1.Checkbox, { color: color, checked: value.includes(option.value), size: 'small' }),
                    option.label);
            })));
};
exports.default = SelectClearButton;
