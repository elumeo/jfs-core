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
var react_datepicker_1 = __importDefault(require("react-datepicker"));
require("./Setup");
var Redux_1 = require("../../Types/Redux");
var mapLanguageToDateFormat_1 = __importDefault(require("./mapLanguageToDateFormat"));
require("react-datepicker/dist/react-datepicker.css");
var material_1 = require("@mui/material");
var Today_1 = __importDefault(require("@mui/icons-material/Today"));
var TextField_1 = __importDefault(require("../TextField"));
var DatePicker = function (_a) {
    var _b;
    var dateFormat = _a.dateFormat, _c = _a.color, color = _c === void 0 ? 'primary' : _c, languageFromProp = _a.language, onChange = _a.onChange, textFieldProps = _a.textFieldProps, _d = _a.shouldOpenOnFocus, shouldOpenOnFocus = _d === void 0 ? true : _d, _e = _a.shouldCloseOnSelect, shouldCloseOnSelect = _e === void 0 ? true : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.isClearable, isClearable = _g === void 0 ? true : _g, rest = __rest(_a, ["dateFormat", "color", "language", "onChange", "textFieldProps", "shouldOpenOnFocus", "shouldCloseOnSelect", "disabled", "isClearable"]);
    var id = react_1.default.useId();
    var clearButtonId = "".concat((_b = rest.id) !== null && _b !== void 0 ? _b : id, "-clear-button");
    var languageFromStore = (0, Redux_1.useSelector)(function (state) { return state.Core.Language.language; });
    var language = languageFromProp || languageFromStore;
    var _h = (0, react_1.useState)(rest.selectsRange && !!rest.startDate && !rest.endDate), open = _h[0], setOpen = _h[1];
    var isPristine = rest.selectsRange
        ? !rest.startDate && !rest.endDate
        : !rest.selected;
    var datePickerRef = (0, react_1.useRef)();
    var handleChangeValue = react_1.default.useCallback(function (newValue, event) {
        var _a;
        if (disabled) {
            return;
        }
        if (Array.isArray(newValue)) {
            if (((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value) === '') {
                //@INFO the only case when this happens is, when the user clears the input by using one of the clear buttons
                onChange((rest.selectsRange
                    ? [null, null]
                    : null), event);
                setOpen(true);
                return;
            }
            else {
                if (shouldCloseOnSelect && !!newValue[0] && !!newValue[1]) {
                    setOpen(false);
                }
            }
        }
        onChange(newValue, event);
    }, [onChange, setOpen, disabled, shouldCloseOnSelect]);
    var toggleOpen = react_1.default.useCallback(function () { return !disabled && setOpen(function (old) { return !old; }); }, [disabled, setOpen]);
    var preparedInputProps = (0, react_1.useMemo)(function () { return (__assign(__assign({}, textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps), { autoComplete: 'off', onFocus: function () { return shouldOpenOnFocus ? setOpen(true) : null; }, endAdornment: (react_1.default.createElement(material_1.IconButton, { disabled: disabled, size: 'small', onClick: toggleOpen },
            react_1.default.createElement(Today_1.default, null))) })); }, [textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps, shouldOpenOnFocus, disabled, setOpen, toggleOpen]);
    return (react_1.default.createElement(react_datepicker_1.default, __assign({ id: id, disabled: disabled, ref: datePickerRef, className: 'jfs-datepicker', dayClassName: function () { return 'jfs-datepicker__day'; }, onClickOutside: toggleOpen, onChange: handleChangeValue, dateFormat: dateFormat || (0, mapLanguageToDateFormat_1.default)(language), locale: language, portalId: 'overlay', open: open, customInput: react_1.default.createElement(TextField_1.default, __assign({ color: color, hideClearButton: !isClearable || isPristine, required: rest.required }, textFieldProps, { InputProps: preparedInputProps, clearButtonProps: { id: clearButtonId } })) }, rest)));
};
exports.default = DatePicker;
