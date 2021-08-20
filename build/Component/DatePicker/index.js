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
import React, { useState, useEffect, useRef, memo } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import './Setup';
import { useSelector } from '../../Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
import 'react-datepicker/dist/react-datepicker.css';
import { ClickAwayListener, IconButton, InputAdornment, TextField } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
const setActive = (domNode, isActive) => {
    if (domNode !== undefined) {
        if (isActive) {
            domNode.classList.add('is-active');
        }
        else {
            domNode.classList.remove('is-active');
        }
    }
};
const DatePicker = (_a) => {
    var { label, error = false, customClearButtonId, dateFormat, value, onChange, errorText, helperText = '', floating, isClearable, textFieldProps } = _a, rest = __rest(_a, ["label", "error", "customClearButtonId", "dateFormat", "value", "onChange", "errorText", "helperText", "floating", "isClearable", "textFieldProps"]);
    const language = useSelector(state => state.Core.Language.language);
    const { formatMessage } = useIntl();
    const [date, setDate] = useState(value);
    const [open, setOpen] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [id] = useState('reactDatePicker_' + Math.floor(Math.random() * 100));
    const datePickerRef = useRef();
    const getInput = () => document.getElementById(id);
    const getInputParent = () => {
        const input = getInput();
        return input ? input.parentElement : null;
    };
    useEffect(() => setDate(value), [value]);
    useEffect(() => {
        var _a;
        (_a = document.getElementById(customClearButtonId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            if (datePickerRef.current !== null) {
                // The clear method does exists => its just not in the typing
                // @ts-ignore
                datePickerRef.current.clear();
            }
        });
        const input = getInput();
        if (input) {
            input.addEventListener('keydown', (e) => {
                if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            input.addEventListener('blur', () => {
                if (datePickerRef.current.isCalendarOpen() === false) {
                    setActive(getInputParent(), false);
                }
                setDirty(true);
            });
            input.addEventListener('focus', () => setActive(getInputParent(), true));
        }
        const inputParent = getInputParent();
        if (inputParent !== null) {
            inputParent.setAttribute('data-label', label !== null ? label : formatMessage({ id: 'form.datePicker.label' }));
        }
    }, []);
    const hasErrorText = () => errorText !== undefined && errorText !== null && errorText !== '';
    const hasError = () => error || (dirty && rest.required && date === null);
    const getTextFieldProps = () => textFieldProps;
    return React.createElement(ClickAwayListener, { onClickAway: () => setOpen(false) },
        React.createElement("span", null,
            React.createElement(ReactDatePicker, Object.assign({}, rest, { wrapperClassName: classNames({ 'has-value': !!value }), ref: datePickerRef, selected: date, onChange: (newDate, event) => {
                    if (isClearable !== true && newDate === null) {
                        return;
                    }
                    setDate(newDate);
                    onChange(newDate, date, event);
                    if (datePickerRef.current.props.shouldCloseOnSelect) {
                        setOpen(false);
                    }
                }, onCalendarOpen: () => setActive(getInputParent(), true), onCalendarClose: () => setActive(getInputParent(), false), dateFormat: dateFormat || mapLanguageToDateFormat(language), locale: language, open: open, id: id, customInput: React.createElement(TextField, Object.assign({}, getTextFieldProps(), { label: label, error: hasError(), helperText: hasError() && hasErrorText() ? errorText : helperText, InputProps: { endAdornment: React.createElement(InputAdornment, { position: 'end' },
                            React.createElement(IconButton, { onClick: () => setOpen(true) },
                                React.createElement(TodayIcon, null))) } })) }))));
};
export default memo(DatePicker);
