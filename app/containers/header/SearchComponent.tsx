import * as React from 'react';

import TextField from 'react-md/lib/TextFields/TextField';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import {InjectedIntlProps, injectIntl} from 'react-intl';

import './SearchComponent.scss';
import {IRootReducer} from "../../store/reducer/RootReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {addToastAction} from "../../store/action/BaseAction";

export interface ISearchComponentProps extends InjectedIntlProps {
    id: string;
    placeholderTranslationId: string;
    onSearch: (props: ISearchComponentProps, state: ISearchComponentState) => void;
    shouldReset?: boolean;
    centered?: boolean;
    value?: string;
    forceNumericInput?: boolean;
    language?: string;
    addToastAction?: (IToastConfig) => void;
}

export interface ISearchComponentState {
    value?: string;
}

class SearchComponent extends React.Component<ISearchComponentProps & InjectedIntlProps, ISearchComponentState> {
    state: ISearchComponentState;

    static defaultProps = {
        forceNumericInput: false
    };

    constructor(props) {
        super(props);
        this.state = {value: this.props.value ? this.props.value : ''};
    }

    handleSearchInputChange = (value: string) => {
        if (this.props.forceNumericInput) {
            value = value
              .toString()
              .match(/^(\d*)/)[0]
              .toString();
        }
        this.setState({value});
    };

    handleSearchInputKeyDown = e => {
        if (e.keyCode == 13) {
            this.handleSearch();
        }
    };

    handleSearch = () => {
        this.props.onSearch(this.props, this.state);
    };

    componentWillReceiveProps(nextProps: Readonly<ISearchComponentProps>, nextContext: any): void {
        const {shouldReset} = this.props;
        if (shouldReset) {
            this.setState({value: ''});
        }
    }

    render() {
        const {id, placeholderTranslationId, intl: {formatMessage}} = this.props;
        return (
          <TextField
            id={id}
            className={'search-component'}
            type="search"
            leftIcon={
                <FontIcon style={{cursor: 'pointer'}} onClick={this.handleSearch}>
                    search
                </FontIcon>
            }
            leftIconStateful
            placeholder={formatMessage({id: placeholderTranslationId})}
            onChange={this.handleSearchInputChange}
            onKeyDown={this.handleSearchInputKeyDown}
            value={this.state.value}
          />
        );
    }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ISearchComponentProps): ISearchComponentProps => ({
    ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {addToastAction}),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(SearchComponent);