import React, {CSSProperties, memo, ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {
  Checkbox,
  ChipProps, CircularProgress,
  FormControl,
  FormControlProps,
  IconProps,
  InputLabel, MenuItem,
  Select,
  SelectProps
} from '@material-ui/core';
import {IconButtonProps} from '@material-ui/core/IconButton';
import ValueRenderer, {Props as ValueRendererProps} from 'Component/SelectClearButton/ValueRenderer';
import EndAdornment from 'Component/SelectClearButton/EndAdornment';
import {createStyles, makeStyles} from '@material-ui/core/styles';
// import MenuItem from 'Component/SelectClearButton/MenuItem';

const checkboxStyle: CSSProperties = {marginRight: '8px'};
const loadingStyle: CSSProperties = {textAlign: 'center'};

const useStyles = makeStyles(() => createStyles({
  root: {
    paddingBottom: (props: { renderValueAsChip: boolean, inputValue: string | string[] }) => props.renderValueAsChip && props.inputValue.length > 0 ? '4px' : '7px'
  }
}));

export type SelectOption = {
  value: string;
  label: ReactNode;
}

export type Props = Partial<Omit<SelectProps, 'onChange'>> & {
  onChange: (value: string | string[]) => void;
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
  formControlProps?: Partial<FormControlProps>;
  valueChipProps?: Partial<ChipProps>;
  renderValueAsChip?: boolean;
  maxValuesToDisplayInInput?: number;
  options: SelectOption[];
  loading?: boolean;
  loadingSize?: number;
  displayClearButton?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectClearButton = ({
                             onChange,
                             clearButtonSize = 'small',
                             clearIconSize = 'small',
                             variant = 'standard',
                             endAdornment,
                             formControlProps = {},
                             valueChipProps = {},
                             renderValueAsChip = false,
                             maxValuesToDisplayInInput = 1,
                             options,
                             loading = false,
                             loadingSize = 20,
                             displayClearButton = true,
                             ...rest
                           }: Props) => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [inputValue, setInputValue] = useState<string | string[]>(rest.multiple ? [] : '');
  const classes = useStyles({renderValueAsChip, inputValue});

  const handleShowClearButtonState = (value: string | string[]) => {
    if (showClearButton === false && value.length > 0) {
      setShowClearButton(true);
    } else if (showClearButton === true && value.length <= 0) {
      setShowClearButton(false);
    }
  }

  useEffect(() => {
    if (rest.value !== undefined) {
      handleShowClearButtonState(rest.value as string | string[]);

      if (inputValue !== rest.value) {
        setInputValue(rest.value as string | string[]);
      }
    }
  }, [rest.value]);

  const handleOnChange: Props['onChange'] = useCallback(value => {
    handleShowClearButtonState(value);
    setInputValue(value);
    if (onChange) {
      onChange(value);
    }
  }, [onChange, inputValue]);

  const handleOnChangeEvent: SelectProps['onChange'] = useCallback(event => {
    const eventValue = event.target.value ? event.target.value as string | string[] : rest.multiple ? [] : '';
    handleOnChange(eventValue);
  }, [onChange, inputValue]);

  const handleOnDeleteItem: ValueRendererProps['onDeleteItem'] = useCallback(item => {
    const eventValue = rest.multiple ? (inputValue as string[]).filter(value => value !== item) : '';
    handleOnChange(eventValue);
  }, [onChange, inputValue]);

  const isInputValueEmpty = useMemo<boolean>(() => inputValue.length <= 0, [inputValue]);
  return <FormControl fullWidth {...formControlProps}>
    {rest.label && <InputLabel shrink={!isInputValueEmpty}>{rest.label}</InputLabel>}
    <Select
      classes={{root: classes.root}}
      {...rest}
      onChange={handleOnChangeEvent}
      endAdornment={<EndAdornment
        endAdornment={endAdornment}
        showClearButton={displayClearButton && showClearButton}
        clearButtonSize={clearButtonSize}
        clearIconSize={clearIconSize}
        onClickClearButton={handleOnChange}
        disabled={rest.disabled}
        multiple={rest.multiple}
      />}
      autoComplete={'new-password'}
      value={inputValue}
      renderValue={selected => <ValueRenderer
        selectedValue={rest.multiple
          ? options.filter(option => (selected as string[]).includes(option.value))
          : options.find(option => option.value === (selected as string))
        }
        renderValueAsChip={renderValueAsChip}
        maxValuesToDisplayInInput={maxValuesToDisplayInInput}
        onDeleteItem={handleOnDeleteItem}
        valueChipProps={valueChipProps}
        setValue={setInputValue}
        multiple={rest.multiple}
      />}
    >
      {loading && <div style={loadingStyle}><CircularProgress size={loadingSize}/></div>}
      {options.map(option => <MenuItem key={'select-menu-item-' + option.value} value={option.value} selected={(inputValue as string[]).includes(option.value)}>
        {rest.multiple && <Checkbox style={checkboxStyle} checked={(inputValue as string[]).includes(option.value)} size={'small'}/>}
        {option.label}
      </MenuItem>)}
    </Select>
  </FormControl>;
};

export default memo(SelectClearButton);
