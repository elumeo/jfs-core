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
import { connect } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { injectIntl } from 'react-intl';
import './Setup';
import International from '../International';
import { LANGUAGE, DATE_FORMAT } from '../../../Types/Language';
import './_styles.scss';
const mapLanguageToDateFormat = (language) => {
    switch (language) {
        case LANGUAGE.GERMAN:
            return DATE_FORMAT.DE;
        case LANGUAGE.ENGLISH:
            return DATE_FORMAT.EN;
        case LANGUAGE.ITALIAN:
            return DATE_FORMAT.IT;
        default:
            return DATE_FORMAT.DE;
    }
};
const DatePicker = (_a) => {
    var { label, customClearButtonId, dateFormat, value, onChange, intl: { formatMessage }, state: { language } } = _a, rest = __rest(_a, ["label", "customClearButtonId", "dateFormat", "value", "onChange", "intl", "state"]);
    const [date, setDate] = useState(value);
    const [open, setOpen] = useState(false);
    const [id] = useState(Math.floor(Math.random() * 100));
    const datePickerRef = useRef();
    useEffect(() => {
        const domNode = document.getElementById(id.toString());
        if (domNode) {
            domNode.parentNode.addEventListener('click', () => setOpen(true));
        }
    });
    useEffect(() => {
        var _a;
        (_a = document.getElementById(customClearButtonId)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            // The clear method does exists => its just not in the typing
            // @ts-ignore
            datePickerRef.current.clear();
        });
        const input = getInput();
        if (input !== undefined) {
            input.addEventListener('keydown', _handleKeyupEventOnCustomInputField);
            input.addEventListener('blur', _handleBlurEventOnCustomInputField);
        }
        const inputParent = getInputParent();
        if (inputParent !== undefined) {
            const finalLabel = label !== null ? label : formatMessage({ id: 'form.datePicker.label' });
            inputParent.setAttribute('data-label', finalLabel);
        }
    }, []);
    const _handleKeyupEventOnCustomInputField = (e) => {
        const input = getInput();
        if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    const _handleBlurEventOnCustomInputField = () => {
        checkRawHasValue();
        if (datePickerRef.current.isCalendarOpen() === false) {
            setActive(false);
        }
    };
    const checkRawHasValue = () => {
        const input = getInput();
        if (input !== undefined) {
            if (input.value === '') {
                setHasValue(false);
            }
            else {
                setHasValue(true);
            }
        }
    };
    const setHasValue = (hasValue) => {
        const inputParent = getInputParent();
        if (inputParent !== undefined) {
            if (hasValue) {
                inputParent.classList.add('has-value');
            }
            else {
                inputParent.classList.remove('has-value');
            }
        }
    };
    const setActive = (isActive) => {
        const inputParent = getInputParent();
        if (inputParent !== undefined) {
            if (isActive) {
                inputParent.classList.add('is-active');
            }
            else {
                inputParent.classList.remove('is-active');
            }
        }
    };
    const getInput = () => {
        // The clear method does exists => its just not in the typing
        // @ts-ignore
        return datePickerRef.current.input;
    };
    const getInputParent = () => {
        const input = getInput();
        if (input !== undefined) {
            return input.parentElement;
        }
        return undefined;
    };
    return (React.createElement(International, null, () => (React.createElement(OutsideClickHandler, { onOutsideClick: () => setOpen(false) },
        React.createElement(ReactDatePicker, Object.assign({}, rest, { ref: datePickerRef, selected: date, onChange: (newDate, event) => {
                setHasValue(newDate !== null);
                setDate(newDate);
                onChange(newDate, date, event);
                if (datePickerRef.current.props.shouldCloseOnSelect) {
                    setOpen(false);
                }
            }, onCalendarOpen: () => {
                setActive(true);
                // addEventListenerToCustomInputField();
            }, onCalendarClose: () => {
                setActive(false);
                // removeEventListenerToCustomInputField();
            }, dateFormat: dateFormat || mapLanguageToDateFormat(language), locale: 'de', open: open, id: id.toString(), customInput: React.createElement("input", { className: 'md-full-width md-text md-text-field customDatePickerInputField' }) }))))));
};
const enhance = connect((state, ownProps) => (Object.assign(Object.assign({}, ownProps), { state: state.Core.Language })));
export default injectIntl(enhance(DatePicker));
//# sourceMappingURL=index.js.map