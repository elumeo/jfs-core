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
import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { injectIntl } from 'react-intl';
import './Setup';
import './_styles.scss';
import { useSelector } from '../../Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
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
const setHasValue = (domNode, hasValue) => {
    if (domNode !== undefined) {
        if (hasValue) {
            domNode.classList.add('has-value');
        }
        else {
            domNode.classList.remove('has-value');
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
    var { label, customClearButtonId, dateFormat, value, onChange, errorText, floating, intl: { formatMessage } } = _a, rest = __rest(_a, ["label", "customClearButtonId", "dateFormat", "value", "onChange", "errorText", "floating", "intl"]);
    const language = useSelector(state => state.Core.Language.language);
    const [date, setDate] = useState(value);
    const [open, setOpen] = useState(false);
    const [id] = useState(Math.floor(Math.random() * 100));
    const datePickerRef = useRef();
    const getInput = () => {
        var _a;
        // The clear method does exists => its just not in the typing
        // @ts-ignore
        return (_a = datePickerRef.current) === null || _a === void 0 ? void 0 : _a.input;
    };
    const getInputParent = () => {
        const input = getInput();
        if (input) {
            return input.parentElement;
        }
        return undefined;
    };
    useEffect(() => {
        const parent = getInputParent();
        if (parent) {
            setError(parent, Boolean(errorText));
            setFloating(parent, floating);
        }
    }, [errorText || '']);
    useEffect(() => {
        const domNode = document.getElementById(id.toString());
        if (domNode) {
            domNode.parentNode.addEventListener('click', () => setOpen(true));
        }
    });
    useEffect(() => {
        if (value && document.getElementById(id.toString()).parentNode) {
            setHasValue(document.getElementById(id.toString()).parentNode, true);
        }
    }, [document.getElementById(id.toString())]);
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
                const input = getInput();
                if (document.activeElement.id === input.id &&
                    e.keyCode === 9 &&
                    e.shiftKey) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            input.addEventListener('blur', () => {
                const input = getInput();
                if (input) {
                    if (input.value === '' && !floating) {
                        setHasValue(getInputParent(), false);
                    }
                    else {
                        setHasValue(getInputParent(), true);
                    }
                }
                if (datePickerRef.current.isCalendarOpen() === false) {
                    setActive(getInputParent(), false);
                }
            });
        }
        const inputParent = getInputParent();
        if (inputParent !== undefined) {
            const finalLabel = (label !== null
                ? label
                : formatMessage({ id: 'form.datePicker.label' }));
            inputParent.setAttribute('data-label', finalLabel);
        }
    }, []);
    return (React.createElement(OutsideClickHandler, { onOutsideClick: () => setOpen(false) },
        React.createElement("span", null,
            React.createElement(ReactDatePicker, Object.assign({}, rest, { ref: datePickerRef, selected: date, onChange: (newDate, event) => {
                    setHasValue(getInputParent(), newDate !== null || floating);
                    setDate(newDate);
                    onChange(newDate, date, event);
                    if (datePickerRef.current.props.shouldCloseOnSelect) {
                        setOpen(false);
                    }
                }, onCalendarOpen: () => {
                    setActive(getInputParent(), true);
                }, onCalendarClose: () => {
                    setActive(getInputParent(), false);
                }, dateFormat: dateFormat || mapLanguageToDateFormat(language), locale: 'de', open: open, id: id.toString(), customInput: React.createElement("input", { className: [
                        'md-full-width',
                        'md-text',
                        'md-text-field',
                        'customDatePickerInputField'
                    ].join(' ') }) })),
            errorText && (React.createElement("div", { className: 'md-text-field-message-container md-full-width', style: { color: 'rgb(183, 28, 28)' } }, errorText)))));
};
const enhance = injectIntl;
export default enhance(DatePicker);
//# sourceMappingURL=index.js.map