import React, { useEffect, useRef, useState } from 'react';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchComponent.scss';
import { useDispatch } from 'react-redux';
import { addToastAction } from '../../Store/Action/ToastAction';
import { useIntl } from 'react-intl';
const SearchComponent = ({ autocompleteData = [], blurOnEsc = true, centered, className, disabled = false, focusInputOnAutocomplete = false, focusInputOnClear = true, forceNumericInput = false, id, indicateSearchProgress, labelTranslationId, onChange, onClear, onRefAvailable, onSearch, placeholderTranslationId, searchOnAutocomplete = true, style, value = '', }) => {
    const intl = useIntl();
    const fM = id => intl.formatMessage({ id });
    const [internValue, setInternValue] = useState('');
    const [inputFocused, setInputFocused] = useState(false);
    useEffect(() => setInternValue(value), [value]);
    const dispatch = useDispatch();
    const ref = useRef(null);
    useEffect(() => {
        if (!!ref) {
            onRefAvailable === null || onRefAvailable === void 0 ? void 0 : onRefAvailable(ref);
        }
    }, [ref]);
    const menuId = `${id}Menu`;
    const handleChange = (value) => {
        if (forceNumericInput) {
            value = value.toString().match(/^(\d*)/)[0].toString();
        }
        setInternValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    const handleKeyDown = e => {
        var _a, _b;
        switch (e.keyCode) {
            case 13: /* Return */
                handleSearch(internValue);
                break;
            case 27: /* ESC */
                if (blurOnEsc) {
                    (_b = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a._field) === null || _b === void 0 ? void 0 : _b.blur();
                }
                break;
            default:
                break;
        }
    };
    const handleAutocomplete = (value) => {
        setInternValue(value);
        if (searchOnAutocomplete) {
            handleSearch(value);
        }
    };
    const handleSearch = (value) => {
        var _a, _b;
        if (!value) {
            (_b = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a._field) === null || _b === void 0 ? void 0 : _b.focus();
            dispatch(addToastAction({ contentTranslationId: 'app.enterSearchValue' }));
            return;
        }
        onSearch({
            autocompleteData, centered, className, disabled, focusInputOnAutocomplete, focusInputOnClear,
            forceNumericInput, id, indicateSearchProgress, labelTranslationId, onChange, onClear, onSearch,
            placeholderTranslationId, searchOnAutocomplete, style, value,
        }, { inputFocused, value: internValue });
    };
    const handleClear = () => {
        var _a, _b;
        if (focusInputOnClear) {
            (_b = (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a._field) === null || _b === void 0 ? void 0 : _b.focus();
        }
        setInternValue('');
        onClear === null || onClear === void 0 ? void 0 : onClear();
    };
    return (React.createElement("div", { id: id, style: style, className: [
            'search-component md-text-field-icon-container',
            disabled ? 'search-component--disabled' : undefined,
            inputFocused ? 'search-component--focused' : undefined,
            className
        ].join(' ') },
        React.createElement("div", { className: 'icon-view-box' }, indicateSearchProgress
            ? (React.createElement(MUI.CircularProgress, { id: `${id}SearchProgress`, className: 'search-progress' }))
            : (React.createElement(MUI.IconButton, { className: 'search-component-search-btn', onClick: () => handleSearch(internValue), disabled: indicateSearchProgress || disabled },
                React.createElement(ICON.Search, null)))),
        React.createElement(Autocomplete, { id: `${id}-autocomplete`, ref: ref, options: autocompleteData, renderInput: params => (React.createElement(MUI.TextField, Object.assign({}, params, { label: "Choose a country", variant: "outlined", inputProps: Object.assign(Object.assign({}, params.inputProps), { autoComplete: 'new-password' }) }))), getOptionLabel: option => option.dataLabel, title: labelTranslationId ? fM(labelTranslationId) : null, onChange: event => handleChange(event.target.value), onKeyDown: event => handleKeyDown(event), placeholder: placeholderTranslationId ? fM(placeholderTranslationId) : null, disabled: disabled, value: internValue, onFocus: () => setInputFocused(true), onBlur: () => setInputFocused(false) }),
        React.createElement(MUI.IconButton, { className: `clear-btn ${internValue != '' ? 'visible' : ''}`, disabled: disabled, onClick: handleClear }, "clear")));
};
export default SearchComponent;
//# sourceMappingURL=SearchComponent.js.map