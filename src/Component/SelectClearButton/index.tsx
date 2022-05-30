import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {
  ChipProps,
  FormControl,
  FormControlProps,
  IconProps,
  InputLabel,
  Select,
  SelectProps
} from '@material-ui/core';
import {IconButtonProps} from '@material-ui/core/IconButton';
import ValueRenderer, {Props as ValueRendererProps} from 'Component/SelectClearButton/ValueRenderer';
import EndAdornment from 'Component/SelectClearButton/EndAdornment';
import {createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    paddingBottom: (props: {renderValueAsChip: boolean, inputValue: string | string[]}) => props.renderValueAsChip && props.inputValue.length > 0 ? '4px' : '7px'
  }
}));

export type Props = Partial<Omit<SelectProps, 'onChange'>> & {
  onChange: (value: string | string[]) => void;
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
  formControlProps?: Partial<FormControlProps>;
  valueChipProps?: Partial<ChipProps>;
  renderValueAsChip?: boolean;
  maxValuesToDisplayInInput?: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectClearButton = ({
                             children,
                             onChange,
                             clearButtonSize = 'small',
                             clearIconSize = 'small',
                             variant = 'standard',
                             endAdornment,
                             formControlProps = {},
                             valueChipProps = {},
                             renderValueAsChip = false,
                             maxValuesToDisplayInInput = 1,
                             ...rest
                           }: Props) => {
  const [showClearButton, setShowClearButton] = useState(false);
  const [inputValue, setInputValue] = useState<string | string[]>(rest.multiple ? [] : '');
  const classes = useStyles({renderValueAsChip, inputValue});

  const handleShowClearButtonState = (value: string | string[]) => {
    if(showClearButton === false && value.length > 0) {
      setShowClearButton(true);
    } else if(showClearButton === true && value.length <= 0) {
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
    if(onChange) {
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
        showClearButton={showClearButton}
        clearButtonSize={clearButtonSize}
        clearIconSize={clearIconSize}
        onClickClearButton={handleOnChange}
        disabled={rest.disabled}
        multiple={rest.multiple}
      />}
      autoComplete={'new-password'}
      value={inputValue}
      renderValue={selected => <ValueRenderer
        selected={selected as string | string[]}
        renderValueAsChip={renderValueAsChip}
        maxValuesToDisplayInInput={maxValuesToDisplayInInput}
        onDeleteItem={handleOnDeleteItem}
        valueChipProps={valueChipProps}
        value={inputValue}
        setValue={setInputValue}
        multiple={rest.multiple}
      />}
    >
      {children}
    </Select>
  </FormControl>;
};

export default memo(SelectClearButton);
