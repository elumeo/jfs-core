import React, { useState, useRef, useMemo } from 'react';
import ReactDatePicker, { ReactDatePickerProps, } from 'react-datepicker';
import './Setup';
import { LANGUAGE } from 'Types/Language';
import { useSelector } from 'Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
import 'react-datepicker/dist/react-datepicker.css';
import { IconButton, } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';
import TextFieldClearButton, { Props } from 'Component/TextField';

export type DatePickerProps<IsRangePicker extends boolean = undefined> = ReactDatePickerProps<null, IsRangePicker> & {
  textFieldProps?: Partial<Props>;
  language?: LANGUAGE;
  shouldOpenOnFocus?: boolean;
  isClearable?: boolean;
  color?: 'primary' | 'secondary';
};

const DatePicker = <IsRangePicker extends boolean = undefined>({
  dateFormat,
  color = 'primary',
  language: languageFromProp,
  onChange,
  textFieldProps,
  shouldOpenOnFocus = true,
  shouldCloseOnSelect = true,
  disabled = false,
  isClearable = true,
  ...rest
}: DatePickerProps<IsRangePicker>) => {
  const id = React.useId()
  const clearButtonId = `${rest.id ?? id}-clear-button`
  const languageFromStore = useSelector(state => state.Core.Language.language);
  const language = languageFromProp || languageFromStore;
  const [open, setOpen] = useState(rest.selectsRange && !!rest.startDate && !rest.endDate);
  const isPristine = rest.selectsRange
    ? !rest.startDate && !rest.endDate
    : !rest.selected;
  const datePickerRef = useRef<ReactDatePicker>();
  const handleChangeValue: ReactDatePickerProps<null, IsRangePicker>['onChange'] = React.useCallback(
    (newValue, event?: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) { return; }
      if (Array.isArray(newValue)) {
        if (event?.target?.value === '') {
          //@INFO the only case when this happens is, when the user clears the input by using one of the clear buttons
          onChange(
            (
              rest.selectsRange
                ? [null, null]
                : null
            ) as IsRangePicker extends false ? Date : [Date, Date]
            ,
            event
          )
          setOpen(true);
          return;
        } else {
          if (shouldCloseOnSelect && !!newValue[0] && !!newValue[1]) {
            setOpen(false);
          }
        }
      }
      onChange(newValue, event)
    }
    , [onChange, setOpen, disabled, shouldCloseOnSelect]
  )
  const toggleOpen = React.useCallback(
    () => !disabled && setOpen(old => !old)
    ,
    [disabled, setOpen]
  );
  const preparedInputProps = useMemo(
    () => ({
      ...textFieldProps?.InputProps,
      autoComplete: 'off',
      onFocus: () => shouldOpenOnFocus ? setOpen(true) : null,
      endAdornment: (
        <IconButton
          disabled={disabled}
          size={'small'}
          onClick={toggleOpen}>
          <TodayIcon />
        </IconButton>
      ),
    }),
    [textFieldProps?.InputProps, shouldOpenOnFocus, disabled, setOpen, toggleOpen]
  );

  return (
    <ReactDatePicker
      id={id}
      disabled={disabled}
      ref={datePickerRef}
      className='jfs-datepicker'
      dayClassName={() => 'jfs-datepicker__day'}
      onClickOutside={toggleOpen}
      onChange={handleChangeValue}
      dateFormat={dateFormat || mapLanguageToDateFormat(language as LANGUAGE)}
      locale={language as LANGUAGE}
      portalId='overlay'
      open={open}
      customInput={
        <TextFieldClearButton
          color={color}
          hideClearButton={!isClearable || isPristine}
          required={rest.required}
          {...(textFieldProps as Props)}
          InputProps={preparedInputProps}
          clearButtonProps={{ id: clearButtonId }}
        />
      }
      {...rest}
    />
  );
};
export default DatePicker
