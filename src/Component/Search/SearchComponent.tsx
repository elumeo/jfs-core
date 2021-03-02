import React, { useEffect, useRef, useState } from 'react';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchComponent.scss';
import { useDispatch } from 'react-redux';
import { addToastAction } from '../../Store/Action/ToastAction';
import { useIntl } from 'react-intl';

export type Props = {
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
  onSearch: (props: Props, state: SearchComponentState) => void;
  placeholderTranslationId: string;
  searchOnAutocomplete?: boolean;
  style?: React.CSSProperties;
  value?: string;
}

export type SearchComponentState = {
  value?: string;
  inputFocused?: boolean;
}

const SearchComponent: React.FC<Props> = ({
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
  const intl = useIntl();
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
            ? (
              <MUI.CircularProgress
                id={`${id}SearchProgress`}
                className='search-progress'/>
            )
            : (
              <MUI.IconButton
                className='search-component-search-btn'
                onClick={() => handleSearch(internValue)}
                disabled={indicateSearchProgress || disabled}>
                <ICON.Search/>
              </MUI.IconButton>
            )
        }
      </div>
      <Autocomplete
        id={`${id}-autocomplete`}
        ref={ref}
        options={autocompleteData as any}
        renderInput={params => (
          <MUI.TextField
            {...params}
            label="Choose a country"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password'
            }}/>
        )}
        getOptionLabel={option => (option as any).dataLabel}
        title={labelTranslationId ? fM(labelTranslationId) : null}
        onChange={event => handleChange((event.target as HTMLInputElement).value)}
        onKeyDown={event => handleKeyDown(event)}
        placeholder={placeholderTranslationId ? fM(placeholderTranslationId) : null}
        disabled={disabled}
        value={internValue}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}/>
      <MUI.IconButton
        className={`clear-btn ${internValue != '' ? 'visible' : ''}`}
        disabled={disabled}
        onClick={handleClear}>
        clear
      </MUI.IconButton>
    </div>
  );
}

export default SearchComponent;
