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
import TextField from 'react-md/lib/TextFields/TextField';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Setup';
import OutsideClickHandler from 'react-outside-click-handler';
import International from '../International';
import { LANGUAGE, DATE_FORMAT } from '../../Types/Language';
import { connect } from 'react-redux';
const mapLanguageToDateFormat = (language) => {
    switch (language) {
        case LANGUAGE.GERMAN: return DATE_FORMAT.DE;
        case LANGUAGE.ENGLISH: return DATE_FORMAT.EN;
        case LANGUAGE.ITALIAN: return DATE_FORMAT.IT;
        default: return DATE_FORMAT.DE;
    }
};
const DatePicker = (_a) => {
    var { customInput, dateFormat, value, onChange, state: { language } } = _a, rest = __rest(_a, ["customInput", "dateFormat", "value", "onChange", "state"]);
    const [date, setDate] = useState(value);
    const [open, setOpen] = useState(false);
    const [id] = useState(Math.floor(Math.random() * 100));
    const datePickerRef = useRef();
    useEffect(() => {
        document.getElementById(id.toString()).parentNode.addEventListener('click', () => setOpen(true));
    });
    return (React.createElement(International, null, ({ formatMessage }) => (React.createElement(OutsideClickHandler, { onOutsideClick: () => setOpen(false) },
        React.createElement(ReactDatePicker, Object.assign({}, rest, { ref: datePickerRef, selected: date, onChange: (newDate) => {
                setDate(newDate);
                onChange(newDate);
                if (datePickerRef.current.props.shouldCloseOnSelect) {
                    setOpen(false);
                }
            }, dateFormat: dateFormat || mapLanguageToDateFormat(language), locale: 'de', open: open, id: id.toString(), customInput: customInput ||
                React.createElement(TextField, { label: formatMessage({ id: 'date' }), id: id }) }))))));
};
const enhance = connect((state, ownProps) => (Object.assign(Object.assign({}, ownProps), { state: state.Core.Language })));
export default enhance(DatePicker);
//# sourceMappingURL=index.js.map