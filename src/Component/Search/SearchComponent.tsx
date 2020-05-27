import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Autocomplete from 'react-md/lib/Autocompletes/Autocomplete';
// noinspection TypeScriptPreferShortImport
import { addToastAction } from '../../Store/Action/ToastAction';
import { ICoreRootReducer } from '../../Store/Reducer';
import './SearchComponent.scss';
import International from '../International';

export interface ISearchComponentProps {
  addToastAction?: typeof addToastAction;
  autocompleteData?: string[] | number[] | { dataLabel: string, dataValue: string }[];
  centered?: boolean;
  focusInputOnAutocomplete?: boolean;
  focusInputOnClear?: boolean;
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

class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentState> {
  state: ISearchComponentState;
  static defaultProps = {
    autocompleteData: [],
    focusInputOnAutocomplete: false,
    focusInputOnClear: true,
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
      this.props.addToastAction({contentTranslationId: 'app.enterSearchValue'});
      return;
    }
    this.props.onSearch(this.props, {...this.state, value});
  };

  handleClear = () => {
    const { focusInputOnClear, id } = this.props;
    if (focusInputOnClear) {
      document.getElementById(`${id}-autocomplete`).focus();
    }
    this.setState({ value: '' });
  };

  render() {
    const {
      id, style, className, placeholderTranslationId, autocompleteData, indicateSearchProgress,
      labelTranslationId, focusInputOnAutocomplete, searchOnAutocomplete
    } = this.props;
    const menuId = `${id}Menu`;
    return (
      <div
        id={id}
        style={style}
        className={'search-component md-text-field-icon-container ' + className}>
        <div className='icon-view-box'>
          {
            indicateSearchProgress
              ? (
                <CircularProgress
                  id={`${id}SearchProgress`}
                  className='search-progress'/>
              )
              : (
                <Button
                  icon
                  onClick={() => this.handleSearch()}
                  disabled={indicateSearchProgress}>
                  search
                </Button>
              )
          }
        </div>
        <International>
          {({ formatMessage }) => (
            <Autocomplete
              id={`${id}-autocomplete`}
              data={autocompleteData}
              focusInputOnAutocomplete={focusInputOnAutocomplete && !searchOnAutocomplete}
              inputClassName={`search ${this.state.value != '' && 'search-active' || ''}`}
              label={labelTranslationId ? formatMessage({id: labelTranslationId}) : null}
              menuId={menuId}
              onAutocomplete={this.handleAutocomplete}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              placeholder={placeholderTranslationId ? formatMessage({id: placeholderTranslationId}) : null}
              textFieldClassName={'md-text-field-icon'}
              value={this.state.value}/>
          )}
        </International>
        <Button
          icon
          className={`clear-btn ${this.state.value != '' ? 'visible' : ''}`}
          onClick={this.handleClear}
        >clear</Button>
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ISearchComponentProps
): ISearchComponentProps => ({
  ...state.toastReducer,
  ...ownProps
});

const enhance = connect(mapStateToProps, {addToastAction});

// noinspection JSUnusedGlobalSymbols
export default enhance(SearchComponent);
