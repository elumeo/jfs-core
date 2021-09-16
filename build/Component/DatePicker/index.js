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
/* eslint-disable max-lines */
import React, { useState, useEffect, useRef, memo } from 'react';
import ReactDatePicker from 'react-datepicker';
import './Setup';
import { useSelector } from '../../Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
import 'react-datepicker/dist/react-datepicker.css';
import { ClickAwayListener, IconButton, InputAdornment, TextField } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import BackspaceIcon from '@material-ui/icons/Backspace';
import moment from 'moment';
const DatePicker = (_a) => {
    var { label, error = false, customClearButtonId = null, dateFormat, value, onChange, errorText, helperText = '', isClearable, textFieldProps, shouldOpenOnFocus = true, disabled = false } = _a, rest = __rest(_a, ["label", "error", "customClearButtonId", "dateFormat", "value", "onChange", "errorText", "helperText", "isClearable", "textFieldProps", "shouldOpenOnFocus", "disabled"]);
    const language = useSelector(state => state.Core.Language.language);
    const [date, setDate] = useState(value);
    const [open, setOpen] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [id] = useState('reactDatePicker_' + Math.floor(Math.random() * 100));
    const datePickerRef = useRef();
    const getInput = () => document.getElementById(id);
    useEffect(() => setDate(value), [value]);
    useEffect(() => {
        var _a;
        if (customClearButtonId !== null) {
            (_a = document.getElementById(customClearButtonId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => handleChangeValue(null));
        }
        const input = getInput();
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }
    }, []);
    const hasErrorText = () => errorText !== undefined && errorText !== null && errorText !== '';
    const hasError = () => error || (dirty && rest.required && date === null);
    const handleChangeValue = (newValue, event = null) => {
        setDate(newValue);
        onChange(newValue, date, event);
        if (datePickerRef.current.props.shouldCloseOnSelect) {
            setOpen(false);
        }
    };
    return (React.createElement(ClickAwayListener, { onClickAway: () => setOpen(false) },
        React.createElement("span", null,
            React.createElement(ReactDatePicker, Object.assign({}, rest, { ref: datePickerRef, selected: date, onChange: (newDate, event) => {
                    // @ts-ignore
                    const isChangeEvent = event._reactName && event._reactName === 'onChange';
                    if (isChangeEvent) {
                        const inputDate = moment(event.target.value, (dateFormat || mapLanguageToDateFormat(language)).toString().toUpperCase(), true);
                        if (inputDate.isValid() === false) {
                            return;
                        }
                    }
                    handleChangeValue(newDate, event);
                }, dateFormat: dateFormat || mapLanguageToDateFormat(language), locale: language, open: open, id: id, customInput: React.createElement(TextField, Object.assign({}, textFieldProps, { label: label, disabled: disabled, error: hasError(), helperText: hasError() && hasErrorText() ? errorText : helperText, autoComplete: 'off', InputProps: {
                        onFocus: () => shouldOpenOnFocus ? setOpen(true) : null,
                        onBlur: () => setDirty(true),
                        endAdornment: React.createElement(InputAdornment, { position: 'end' },
                            React.createElement(IconButton, { size: 'small', onClick: () => setOpen(true) },
                                React.createElement(TodayIcon, null)),
                            isClearable && React.createElement(IconButton, { size: 'small', disabled: disabled || date === null, color: 'secondary', onClick: () => handleChangeValue(null) },
                                React.createElement(BackspaceIcon, null)))
                    } })) })))));
};
export default memo(DatePicker);
