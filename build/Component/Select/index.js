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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var useFormControl_1 = __importDefault(require("@mui/material/FormControl/useFormControl"));
var ValueRenderer_1 = __importDefault(require("Component/Select/ValueRenderer"));
var Select = function (_a) {
    var _b;
    var children = _a.children, helperText = _a.helperText, _c = _a.loading, loading = _c === void 0 ? false : _c, maxValuesShown = _a.maxValuesShown, _d = _a.canClear, canClear = _d === void 0 ? false : _d, formControlProps = _a.formControlProps, selectProps = __rest(_a, ["children", "helperText", "loading", "maxValuesShown", "canClear", "formControlProps"]);
    var formControl = (0, useFormControl_1.default)();
    var labelsByValue = react_1.default.useMemo(function () {
        var labelMap = {};
        react_1.default.Children.forEach(children, function (child) {
            labelMap[child.props.value] = child.props.children;
        });
        return labelMap;
    }, [children]);
    var createSelectChangeEvent = function (value) { return ({
        target: {
            value: value,
            name: selectProps.name,
        },
    }); };
    var isInClearableState = Array.isArray(selectProps.value)
        ? selectProps.value.length > 0
        : selectProps.value != null;
    var onClear = function () {
        var changeEvent = createSelectChangeEvent(selectProps.multiple ? [] : null);
        selectProps.onChange(changeEvent, null);
    };
    var onUnselect = function (value) {
        var changeEvent = createSelectChangeEvent(Array.isArray(selectProps.value)
            ? selectProps.value.filter(function (selectedValue) { return selectedValue != value; })
            : null);
        selectProps.onChange(changeEvent, null);
    };
    var selectContent = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [selectProps.label && (0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ color: (_b = selectProps === null || selectProps === void 0 ? void 0 : selectProps.color) !== null && _b !== void 0 ? _b : selectProps.color, id: selectProps.labelId }, { children: selectProps.label })), (0, jsx_runtime_1.jsxs)(material_1.Select, __assign({ renderValue: function (selected) { return (0, jsx_runtime_1.jsx)(ValueRenderer_1.default, { maxValuesShown: maxValuesShown, labelsByValue: labelsByValue, selected: selected, onUnselect: onUnselect, onClear: onClear, isInClearableState: canClear && isInClearableState }); } }, selectProps, { children: [loading && (0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ sx: { justifyContent: 'center' } }, { children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { size: 20, color: selectProps.color }) })), children] })), helperText && (0, jsx_runtime_1.jsx)(material_1.FormHelperText, { children: helperText })] });
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [formControl && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: selectContent }), formControl === undefined && (0, jsx_runtime_1.jsx)(material_1.FormControl, __assign({}, formControlProps, { children: selectContent }))] });
};
exports.default = Select;
