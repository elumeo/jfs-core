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
var core_1 = require("@material-ui/core");
var Today_1 = __importDefault(require("@material-ui/icons/Today"));
var moment_1 = __importDefault(require("moment"));
var TextFieldClearButton_1 = __importDefault(require("../TextFieldClearButton"));
var DatePicker = function (_a) {
    var label = _a.label, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.customClearButtonId, customClearButtonId = _c === void 0 ? null : _c, dateFormat = _a.dateFormat, value = _a.value, onChange = _a.onChange, errorText = _a.errorText, _d = _a.helperText, helperText = _d === void 0 ? '' : _d, textFieldProps = _a.textFieldProps, _e = _a.shouldOpenOnFocus, shouldOpenOnFocus = _e === void 0 ? true : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.isClearable, isClearable = _g === void 0 ? true : _g, rest = __rest(_a, ["label", "error", "customClearButtonId", "dateFormat", "value", "onChange", "errorText", "helperText", "textFieldProps", "shouldOpenOnFocus", "disabled", "isClearable"]);
    var language = (0, Redux_1.useSelector)(function (state) { return state.Core.Language.language; });
    var _h = (0, react_1.useState)(value), date = _h[0], setDate = _h[1];
    var _j = (0, react_1.useState)(false), open = _j[0], setOpen = _j[1];
    var _k = (0, react_1.useState)(false), dirty = _k[0], setDirty = _k[1];
    var id = (0, react_1.useState)('reactDatePicker_' + Math.floor(Math.random() * 100))[0];
    var datePickerRef = (0, react_1.useRef)();
    var getInput = function () { return document.getElementById(id); };
    (0, react_1.useEffect)(function () { return setDate(value); }, [value]);
    (0, react_1.useEffect)(function () {
        var _a;
        if (customClearButtonId !== null) {
            (_a = document.getElementById(customClearButtonId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return handleChangeValue(null); });
        }
        var input = getInput();
        if (input) {
            input.addEventListener('keydown', function (e) {
                if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }
    }, []);
    var hasErrorText = function () { return errorText !== undefined && errorText !== null && errorText !== ''; };
    var hasError = function () { return error || (dirty && rest.required && date === null); };
    var handleChangeValue = function (newValue, event) {
        if (event === void 0) { event = null; }
        setDate(newValue);
        onChange(newValue, date, event);
        if (datePickerRef.current.props.shouldCloseOnSelect) {
            setOpen(false);
        }
    };
    var handleOnChange = (0, react_1.useCallback)(function (newDate, event) {
        // @ts-ignore
        var isChangeEvent = event._reactName && event._reactName === 'onChange';
        if (isChangeEvent) {
            var inputDate = (0, moment_1.default)(event.target.value, (dateFormat || (0, mapLanguageToDateFormat_1.default)(language)).toString().toUpperCase(), true);
            if (inputDate.isValid() === false) {
                return;
            }
        }
        handleChangeValue(newDate, event);
    }, []);
    var handleClearClick = (0, react_1.useCallback)(function () { return isClearable ? handleChangeValue(null) : null; }, [isClearable]);
    var handleTodayClick = (0, react_1.useCallback)(function () { return disabled === false ? setOpen(true) : null; }, [disabled]);
    var preparedInputProps = (0, react_1.useMemo)(function () { return ({
        onFocus: function () { return shouldOpenOnFocus ? setOpen(true) : null; },
        onBlur: function () { return setDirty(true); },
        endAdornment: react_1.default.createElement(core_1.InputAdornment, { position: 'end' },
            react_1.default.createElement(core_1.IconButton, { disabled: disabled, size: 'small', onClick: handleTodayClick },
                react_1.default.createElement(Today_1.default, null)))
    }); }, [shouldOpenOnFocus, disabled]);
    return (react_1.default.createElement(core_1.ClickAwayListener, { onClickAway: function () { return setOpen(false); } },
        react_1.default.createElement("span", null,
            react_1.default.createElement(react_datepicker_1.default, __assign({ disabled: disabled }, rest, { ref: datePickerRef, selected: date, onChange: handleOnChange, dateFormat: dateFormat || (0, mapLanguageToDateFormat_1.default)(language), locale: language, open: open, id: id, customInput: react_1.default.createElement(TextFieldClearButton_1.default, __assign({}, textFieldProps, { isClearable: isClearable, label: label, error: hasError(), helperText: hasError() && hasErrorText() ? errorText : helperText, autoComplete: 'off', onClearClick: handleClearClick, InputProps: preparedInputProps })) })))));
};
exports.default = (0, react_1.memo)(DatePicker);
