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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var ValueRenderer_1 = __importDefault(require("../SelectClearButton/ValueRenderer"));
var EndAdornment_1 = __importDefault(require("../SelectClearButton/EndAdornment"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = (0, styles_1.makeStyles)(function () { return (0, styles_1.createStyles)({
    root: {
        paddingBottom: function (props) { return props.renderValueAsChip && props.inputValue.length > 0 ? '4px' : '7px'; }
    }
}); });
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var SelectClearButton = function (_a) {
    var children = _a.children, onChange = _a.onChange, _b = _a.clearButtonSize, clearButtonSize = _b === void 0 ? 'small' : _b, _c = _a.clearIconSize, clearIconSize = _c === void 0 ? 'small' : _c, _d = _a.variant, variant = _d === void 0 ? 'standard' : _d, endAdornment = _a.endAdornment, _e = _a.formControlProps, formControlProps = _e === void 0 ? {} : _e, _f = _a.valueChipProps, valueChipProps = _f === void 0 ? {} : _f, _g = _a.renderValueAsChip, renderValueAsChip = _g === void 0 ? false : _g, _h = _a.maxValuesToDisplayInInput, maxValuesToDisplayInInput = _h === void 0 ? 1 : _h, rest = __rest(_a, ["children", "onChange", "clearButtonSize", "clearIconSize", "variant", "endAdornment", "formControlProps", "valueChipProps", "renderValueAsChip", "maxValuesToDisplayInInput"]);
    var _j = (0, react_1.useState)(false), showClearButton = _j[0], setShowClearButton = _j[1];
    var _k = (0, react_1.useState)(rest.multiple ? [] : ''), inputValue = _k[0], setInputValue = _k[1];
    var classes = useStyles({ renderValueAsChip: renderValueAsChip, inputValue: inputValue });
    var handleShowClearButtonState = function (value) {
        if (showClearButton === false && value.length > 0) {
            setShowClearButton(true);
        }
        else if (showClearButton === true && value.length <= 0) {
            setShowClearButton(false);
        }
    };
    (0, react_1.useEffect)(function () {
        if (rest.value !== undefined) {
            handleShowClearButtonState(rest.value);
            if (inputValue !== rest.value) {
                setInputValue(rest.value);
            }
        }
    }, [rest.value]);
    var handleOnChange = (0, react_1.useCallback)(function (value) {
        handleShowClearButtonState(value);
        setInputValue(value);
        if (onChange) {
            onChange(value);
        }
    }, [onChange, inputValue]);
    var handleOnChangeEvent = (0, react_1.useCallback)(function (event) {
        var eventValue = event.target.value ? event.target.value : rest.multiple ? [] : '';
        handleOnChange(eventValue);
    }, [onChange, inputValue]);
    var handleOnDeleteItem = (0, react_1.useCallback)(function (item) {
        var eventValue = rest.multiple ? inputValue.filter(function (value) { return value !== item; }) : '';
        handleOnChange(eventValue);
    }, [onChange, inputValue]);
    var isInputValueEmpty = (0, react_1.useMemo)(function () { return inputValue.length <= 0; }, [inputValue]);
    return react_1.default.createElement(core_1.FormControl, __assign({ fullWidth: true }, formControlProps),
        rest.label && react_1.default.createElement(core_1.InputLabel, { shrink: !isInputValueEmpty }, rest.label),
        react_1.default.createElement(core_1.Select, __assign({ classes: { root: classes.root } }, rest, { onChange: handleOnChangeEvent, endAdornment: react_1.default.createElement(EndAdornment_1.default, { endAdornment: endAdornment, showClearButton: showClearButton, clearButtonSize: clearButtonSize, clearIconSize: clearIconSize, onClickClearButton: handleOnChange, disabled: rest.disabled, multiple: rest.multiple }), autoComplete: 'new-password', value: inputValue, renderValue: function (selected) { return react_1.default.createElement(ValueRenderer_1.default, { selected: selected, renderValueAsChip: renderValueAsChip, maxValuesToDisplayInInput: maxValuesToDisplayInInput, onDeleteItem: handleOnDeleteItem, valueChipProps: valueChipProps, value: inputValue, setValue: setInputValue, multiple: rest.multiple }); } }), children));
};
exports.default = (0, react_1.memo)(SelectClearButton);
