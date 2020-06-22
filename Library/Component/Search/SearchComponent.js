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
                case 13:
                    this.handleSearch();
                    break;
                case 27:
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
            document.getElementById(this.props.id).focus();
            this.setState({ value: '' });
        };
        this.state = { value: this.props.value ? this.props.value : '' };
    }
    render() {
        const { id, style, className, placeholderTranslationId, autocompleteData, indicateSearchProgress, labelTranslationId, focusInputOnAutocomplete, searchOnAutocomplete } = this.props;
        const menuId = `${id}Menu`;
        return (React.createElement("div", { id: id, style: style, className: 'search-component md-text-field-icon-container ' + className },
            React.createElement("div", { className: "icon-view-box" }, indicateSearchProgress
                ? (React.createElement(CircularProgress, { id: `${id}SearchProgress`, className: "search-progress" }))
                : (React.createElement(Button, { icon: true, onClick: () => this.handleSearch(), disabled: indicateSearchProgress }, "search"))),
            React.createElement(International, null, ({ formatMessage }) => (React.createElement(Autocomplete, { id: `${id}-autocomplete`, data: autocompleteData, focusInputOnAutocomplete: focusInputOnAutocomplete && !searchOnAutocomplete, inputClassName: `search ${this.state.value != '' && 'search-active' || ''}`, label: labelTranslationId ? formatMessage({ id: labelTranslationId }) : null, menuId: menuId, onAutocomplete: this.handleAutocomplete, onChange: this.handleChange, onKeyDown: this.handleKeyDown, placeholder: placeholderTranslationId ? formatMessage({ id: placeholderTranslationId }) : null, textFieldClassName: 'md-text-field-icon', value: this.state.value }))),
            React.createElement(Button, { icon: true, className: `clear-btn ${this.state.value != '' ? 'visible' : ''}`, onClick: this.handleClear }, "clear")));
    }
}
SearchComponent.defaultProps = {
    autocompleteData: [],
    focusInputOnAutocomplete: false,
    forceNumericInput: false,
    searchOnAutocomplete: true,
    value: '',
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, state.Core.Toast), ownProps));
const enhance = connect(mapStateToProps, { addToastAction });
export default enhance(SearchComponent);
//# sourceMappingURL=SearchComponent.js.map