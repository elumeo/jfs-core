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
// import OutsideClickHandler from 'react-outside-click-handler';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import './Setup';
import { useSelector } from '../../Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
import 'react-datepicker/dist/react-datepicker.css';
import { ClickAwayListener, TextField } from '@material-ui/core';
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
const setError = (domNode, error) => {
    if (domNode !== undefined) {
        if (error && !domNode.classList.contains('error')) {
            domNode.classList.add('error');
        }
        else if (!error && domNode.classList.contains('error')) {
            domNode.classList.remove('error');
        }
    }
};
const setFloating = (domNode, floating) => {
    if (domNode !== undefined) {
        if (floating && !domNode.classList.contains('floating')) {
            domNode.classList.add('floating');
        }
        else if (!floating && domNode.classList.contains('floating')) {
            domNode.classList.remove('floating');
        }
    }
};
const DatePicker = (_a) => {
    var { label, customClearButtonId, dateFormat, value, onChange, errorText, floating, isClearable } = _a, rest = __rest(_a, ["label", "customClearButtonId", "dateFormat", "value", "onChange", "errorText", "floating", "isClearable"]);
    const language = useSelector(state => state.Core.Language.language);
    const { formatMessage } = useIntl();
    const [date, setDate] = useState(value);
    const [open, setOpen] = useState(false);
    const [id] = useState('reactDatePicker_' + Math.floor(Math.random() * 100));
    const datePickerRef = useRef();
    const getInput = () => document.getElementById(id);
    const getInputParent = () => {
        const input = getInput();
        return input ? input.parentElement : null;
    };
    useEffect(() => {
        const parent = getInputParent();
        if (parent) {
            setError(parent, Boolean(errorText));
            setFloating(parent, floating);
        }
    }, [errorText || '']);
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
            input.addEventListener('blur', () => (datePickerRef.current.isCalendarOpen() === false)
                ? setActive(getInputParent(), false)
                : null);
            input.addEventListener('focus', () => setActive(getInputParent(), true));
        }
        const inputParent = getInputParent();
        if (inputParent !== null) {
            inputParent.setAttribute('data-label', label !== null ? label : formatMessage({ id: 'form.datePicker.label' }));
        }
    }, []);
    return React.createElement(ClickAwayListener, { onClickAway: () => setOpen(false) },
        React.createElement("span", null,
            React.createElement(ReactDatePicker, Object.assign({}, rest, { wrapperClassName: classNames({ 'has-value': !!value }), onInputClick: () => setOpen(true), ref: datePickerRef, selected: date, onChange: (newDate, event) => {
                    if (isClearable !== true && newDate === null) {
                        return;
                    }
                    setDate(newDate);
                    onChange(newDate, date, event);
                    if (datePickerRef.current.props.shouldCloseOnSelect) {
                        setOpen(false);
                    }
                }, onCalendarOpen: () => setActive(getInputParent(), true), onCalendarClose: () => setActive(getInputParent(), false), dateFormat: dateFormat || mapLanguageToDateFormat(language), locale: language, open: open, id: id, customInput: React.createElement(TextField, { label: 'Label' }) })),
            errorText && React.createElement("div", null, errorText)));
};
export default memo(DatePicker);
