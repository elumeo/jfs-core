import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/Progress/CircularProgress';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchComponent.scss';
import { useDispatch } from 'react-redux';
// import {  injectIntl } from 'react-intl';
// noinspection ES6PreferShortImport
import { addToastAction } from '../../Store/Action/ToastAction';

export type SearchComponentProps = {
  autocompleteData?: string[] | number[] | { dataLabel: string, dataValue: string }[];
  blurOnEsc?: boolean;
  centered?: boolean;
  className?: string;
  disabled?: boolean;
  focusInputOnAutocomplete?: boolean;
  focusInputOnClear?: boolean;
  forceNumericInput?: boolean;
  id: string;
  indicateSearchProgress?: boolean;
  labelTranslationId?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  onRefAvailable?: (ref) => void;
  onSearch: (props: SearchComponentProps, state: SearchComponentState) => void;
  placeholderTranslationId: string;
  searchOnAutocomplete?: boolean;
  style?: React.CSSProperties;
  value?: string;
}

export type SearchComponentState = {
  value?: string;
  inputFocused?: boolean;
}

const SearchComponent: React.FC<SearchComponentProps & InjectedIntlProps> = injectIntl(
  ({
     intl,
     autocompleteData = [],
     blurOnEsc = true,
     centered,
     className,
     disabled = false,
     focusInputOnAutocomplete = false,
     focusInputOnClear = true,
     forceNumericInput = false,
     id,
     indicateSearchProgress,
     labelTranslationId,
     onChange,
     onClear,
     onRefAvailable,
     onSearch,
     placeholderTranslationId,
     searchOnAutocomplete = true,
     style,
     value = '',
   }) => {
    const fM = id => intl.formatMessage({ id });

    const [internValue, setInternValue] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    useEffect(() => setInternValue(value), [value]);

    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
      if (!!ref) {
        onRefAvailable?.(ref)
      }
    }, [ref]);

    const menuId = `${id}Menu`;

    const handleChange = (value: string) => {
      if (forceNumericInput) {
        value = value.toString().match(/^(\d*)/)[0].toString();
      }
      setInternValue(value);
      onChange?.(value);
    };

    const handleKeyDown = e => {
      switch (e.keyCode) {
        case 13: /* Return */
          handleSearch(internValue);
          break;
        case 27: /* ESC */
          if (blurOnEsc) {
            ref?.current?._field?.blur();
          }
          break;
        default:
          break;
      }
    };

    const handleAutocomplete = (value: string) => {
      setInternValue(value)
      if (searchOnAutocomplete) {
        handleSearch(value);
      }
    };

    const handleSearch = (value: string) => {
      if (!value) {
        ref?.current?._field?.focus();
        dispatch(addToastAction({ contentTranslationId: 'app.enterSearchValue' }));
        return;
      }
      onSearch({
          autocompleteData, centered, className, disabled, focusInputOnAutocomplete, focusInputOnClear,
          forceNumericInput, id, indicateSearchProgress, labelTranslationId, onChange, onClear, onSearch,
          placeholderTranslationId, searchOnAutocomplete, style, value,
        },
        { inputFocused, value: internValue }
      );
    };

    const handleClear = () => {
      if (focusInputOnClear) {
        ref?.current?._field?.focus();
      }
      setInternValue('');
      onClear?.();
    };

    return (
      <div
        id={id}
        style={style}
        className={[
          'search-component md-text-field-icon-container',
          disabled ? 'search-component--disabled' : undefined,
          inputFocused ? 'search-component--focused' : undefined,
          className
        ].join(' ')}>
        <div className='icon-view-box'>
          {
            indicateSearchProgress
              ? <CircularProgress id={`${id}SearchProgress`} className='search-progress'/>
              : <Button icon
                        className='search-component-search-btn'
                        onClick={() => handleSearch(internValue)}
                        disabled={indicateSearchProgress || disabled}>
                search
              </Button>
          }
        </div>
        <Autocomplete
          id={`${id}-autocomplete`}
          ref={ref}
          data={autocompleteData}
          focusInputOnAutocomplete={focusInputOnAutocomplete && !searchOnAutocomplete}
          inputClassName={`search ${internValue != '' && 'search-active' || ''}`}
          label={labelTranslationId ? fM(labelTranslationId) : null}
          menuId={menuId}
          onAutocomplete={value => handleAutocomplete(value as string)}
          onChange={value => handleChange(value)}
          onKeyDown={event => handleKeyDown(event)}
          placeholder={placeholderTranslationId ? fM(placeholderTranslationId) : null}
          textFieldClassName={'md-text-field-icon'}
          disabled={disabled}
          value={internValue}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <Button
          icon
          className={`clear-btn ${internValue != '' ? 'visible' : ''}`}
          disabled={disabled}
          onClick={handleClear}
        >clear</Button>
      </div>
    );
  }
)

export default SearchComponent;