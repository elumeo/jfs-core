import * as React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { Autocomplete } from "react-md";
import { addToastAction } from "../../store/action/ToastAction";
import IRootReducer from "../../store/reducer/RootReducer";

import './SearchComponent.scss';
import { Button } from "react-md/lib/Buttons";
import CircularProgress from "react-md/lib/Progress/CircularProgress";

export interface ISearchComponentProps extends InjectedIntlProps {
    addToastAction?: (IToastConfig) => void;
    autocompleteData?: string[]|number[]|{dataLabel:string, dataValue:string}[];
    centered?: boolean;
    focusInputOnAutocomplete?: boolean;
    forceNumericInput?: boolean;
    id: string;
    indicateSearchProgress?: boolean;
    labelTranslationId?: string;
    onChange?: (value: string) => void;
    onSearch: (props: ISearchComponentProps, state: ISearchComponentState) => void;
    placeholderTranslationId: string;
    searchOnAutocomplete?: boolean;
    style?: React.CSSProperties;
    className?: string;
    value?: string;
}

export interface ISearchComponentState {
    value?: string;
}

class SearchComponent extends React.Component<ISearchComponentProps & InjectedIntlProps, ISearchComponentState> {
    state: ISearchComponentState;
    static defaultProps = {
        autocompleteData: [],
        focusInputOnAutocomplete: false,
        forceNumericInput: false,
        searchOnAutocomplete: true,
        value: '',
    };

    constructor(props) {
        super(props);
        this.state = {value: this.props.value ? this.props.value : ''};
    }

    handleChange = (value: string) => {
        if (this.props.forceNumericInput) {
            value = value
              .toString()
              .match(/^(\d*)/)[0]
              .toString();
        }
        if (this.props.onChange) {
            this.props.onChange(value);
        }
        this.setState({value});
    };

    handleKeyDown = e => {
        switch (e.keyCode) {
            case 13 /* Return */:
                this.handleSearch();
                break;
            case 27 /* ESC */:
                document.getElementById(this.props.id).blur();
                break;
        }
    };

    handleAutocomplete = (v) => {
        const {searchOnAutocomplete} = this.props;
        this.setState({value: v});
        if (searchOnAutocomplete) {
            this.handleSearch(v);
        }
    };

    handleSearch = (value?: string) => {
        value = value == undefined ? this.state.value : value;
        if (value == '') {
            document.getElementById(this.props.id).focus();
            this.props.addToastAction({ contentTranslationId: 'app.enterSearchValue'});
            return;
        }
        this.props.onSearch(this.props, {...this.state, value});
    };

    handleClear = () => {
        document.getElementById(this.props.id).focus();
        this.setState({value: ''});
    };

    render() {
        const {
            id, style, className, placeholderTranslationId, intl: {formatMessage}, autocompleteData, indicateSearchProgress,
            labelTranslationId, focusInputOnAutocomplete, searchOnAutocomplete } = this.props;
        const menuId = `${id}Menu`;
        return (
            <div className="search-component md-text-field-icon-container" style={style}>
                <Button icon onClick={() => this.handleSearch()}>search</Button>
                <Autocomplete
                  data={autocompleteData}
                  id={id}
                  className={className}
                  focusInputOnAutocomplete={focusInputOnAutocomplete && !searchOnAutocomplete}
                  inputClassName={`search ${this.state.value != '' && 'search-active' || ''}`}
                  label={labelTranslationId ? formatMessage({id: labelTranslationId}) : null}
                  menuId={menuId}
                  onAutocomplete={this.handleAutocomplete}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  placeholder={placeholderTranslationId ? formatMessage({id: placeholderTranslationId}) : null}
                  textFieldClassName={'md-text-field-icon'}
                  value={this.state.value}
                />
                  <CircularProgress
                    centered
                    id={`${id}SearchProgress`}
                    className={`search-progress ${indicateSearchProgress ? 'visible' : ''}`} />
                  <Button
                    icon
                    className={`clear-btn ${this.state.value != '' && !indicateSearchProgress ? 'visible' : ''}`}
                    onClick={this.handleClear}
                  >clear</Button>
            </div>
        );
    }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ISearchComponentProps): ISearchComponentProps => ({
    ...state.toastReducer,
    ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {addToastAction}),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(SearchComponent);
