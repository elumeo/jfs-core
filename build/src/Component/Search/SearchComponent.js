import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Autocomplete from 'react-md/lib/Autocompletes/Autocomplete';
import { addToastAction } from '../../Store/Action/ToastAction';
import './SearchComponent.scss';
import International from '../International';
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputFocused: false };
        this.handleChange = (value) => {
            if (this.props.forceNumericInput) {
                value = value
                    .toString()
                    .match(/^(\d*)/)[0]
                    .toString();
            }
            if (this.props.onChange) {
                this.props.onChange(value);
            }
            this.setState({ value });
        };
        this.handleKeyDown = e => {
            switch (e.keyCode) {
                case 13: /* Return */
                    this.handleSearch();
                    break;
                case 27: /* ESC */
                    document.getElementById(this.props.id).blur();
                    break;
                default:
                    break;
            }
        };
        this.handleAutocomplete = (v) => {
            const { searchOnAutocomplete } = this.props;
            this.setState({ value: v });
            if (searchOnAutocomplete) {
                this.handleSearch(v);
            }
        };
        this.handleSearch = (value) => {
            value = value == undefined ? this.state.value : value;
            if (value == '') {
                document.getElementById(this.props.id).focus();
                this.props.addToastAction({ contentTranslationId: 'app.enterSearchValue' });
                return;
            }
            this.props.onSearch(this.props, Object.assign(Object.assign({}, this.state), { value }));
        };
        this.handleClear = () => {
            const { focusInputOnClear, id } = this.props;
            if (focusInputOnClear) {
                document.getElementById(`${id}-autocomplete`).focus();
            }
            this.setState({ value: '' });
            if (this.props.onClear) {
                this.props.onClear();
            }
        };
        this.state = { value: this.props.value ? this.props.value : '' };
    }
    render() {
        const { id, style, className, placeholderTranslationId, autocompleteData, indicateSearchProgress, labelTranslationId, focusInputOnAutocomplete, searchOnAutocomplete, disabled } = this.props;
        const menuId = `${id}Menu`;
        return (React.createElement("div", { id: id, style: style, className: [
                'search-component md-text-field-icon-container',
                disabled ? 'search-component--disabled' : undefined,
                this.state.inputFocused ? 'search-component--focused' : undefined,
                className
            ].join(' ') },
            React.createElement("div", { className: 'icon-view-box' }, indicateSearchProgress
                ? (React.createElement(CircularProgress, { id: `${id}SearchProgress`, className: 'search-progress' }))
                : (React.createElement(Button, { icon: true, className: 'search-component-search-btn', onClick: () => this.handleSearch(), disabled: indicateSearchProgress || disabled }, "search"))),
            React.createElement(International, null, ({ formatMessage }) => (React.createElement(Autocomplete, { id: `${id}-autocomplete`, data: autocompleteData, focusInputOnAutocomplete: focusInputOnAutocomplete && !searchOnAutocomplete, inputClassName: `search ${this.state.value != '' && 'search-active' || ''}`, label: labelTranslationId ? formatMessage({ id: labelTranslationId }) : null, menuId: menuId, onAutocomplete: this.handleAutocomplete, onChange: this.handleChange, onKeyDown: this.handleKeyDown, placeholder: placeholderTranslationId ? formatMessage({ id: placeholderTranslationId }) : null, textFieldClassName: 'md-text-field-icon', disabled: disabled, value: this.state.value, onFocus: () => this.setState({ inputFocused: true }), onBlur: () => this.setState({ inputFocused: false }) }))),
            React.createElement(Button, { icon: true, className: `clear-btn ${this.state.value != '' ? 'visible' : ''}`, disabled: disabled, onClick: this.handleClear }, "clear")));
    }
}
SearchComponent.defaultProps = {
    autocompleteData: [],
    focusInputOnAutocomplete: false,
    focusInputOnClear: true,
    forceNumericInput: false,
    searchOnAutocomplete: true,
    value: '',
    disabled: false,
};
// higher order components -----------------------------------------------------
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, state.Core.Toast), ownProps));
const enhance = connect(mapStateToProps, { addToastAction });
// noinspection JSUnusedGlobalSymbols
export default enhance(SearchComponent);
//# sourceMappingURL=SearchComponent.js.map