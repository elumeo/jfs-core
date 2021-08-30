/* eslint-disable max-lines */
import React, { useState, useEffect, useRef, memo, ChangeEvent } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import classNames from 'classnames';
import './Setup';
import { LANGUAGE } from 'Types/Language';
import { useSelector } from 'Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
import 'react-datepicker/dist/react-datepicker.css';
import { ClickAwayListener, IconButton, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import BackspaceIcon from '@material-ui/icons/Backspace';
import moment from 'moment';

export type DatePickerProps = Omit<ReactDatePickerProps, 'value'> & {
  label?: string;
  error?: boolean;
  customClearButtonId?: string;
  value: Date;
  state?: { language: string };
  errorText?: string;
  helperText?: string;
  textFieldProps?: Partial<TextFieldProps>;
  floating?: boolean;
  onChange: (
    newDate: Date,
    oldDate: Date,
    event: React.SyntheticEvent<unknown> | undefined
  ) => void;
  shouldOpenOnFocus?: boolean;
  disabled?: boolean;
};

const DatePicker = ({
                      label,
                      error = false,
                      customClearButtonId = null,
                      dateFormat,
                      value,
                      onChange,
                      errorText,
                      helperText = '',
                      isClearable,
                      textFieldProps,
                      shouldOpenOnFocus = true,
                      disabled = false,
                      ...rest
                    }: DatePickerProps) => {
  const language = useSelector(state => state.Core.Language.language);
  const [date, setDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [id] = useState('reactDatePicker_' + Math.floor(Math.random() * 100));
  const datePickerRef = useRef<ReactDatePicker>();

  const getInput = () => document.getElementById(id) as HTMLInputElement;

  useEffect(() => setDate(value), [value]);

  useEffect(() => {
    if (customClearButtonId !== null) {
      document.getElementById(customClearButtonId)?.addEventListener('click', () => handleChangeValue(null));
    }

    const input = getInput();
    if (input) {
      input.addEventListener('keydown', (e: KeyboardEvent) => {
        if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    }
  }, []);

  const hasErrorText = () => errorText !== undefined && errorText !== null && errorText !== '';
  const hasError = () => error || (dirty && rest.required && date === null);
  const handleChangeValue = (newValue: Date, event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> = null) => {
    setDate(newValue as Date);
    onChange(newValue as Date, date, event);
    if (datePickerRef.current.props.shouldCloseOnSelect) {
      setOpen(false);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <span>
        <ReactDatePicker
          {...rest}
          wrapperClassName={classNames({ 'has-value': !!value })}
          ref={datePickerRef}
          selected={date}
          onChange={(newDate, event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const inputDate = moment(event.target.value, (dateFormat || mapLanguageToDateFormat(language as LANGUAGE)).toString().toUpperCase(), true);
            if (inputDate.isValid() === false) {
              return;
            }
            handleChangeValue(newDate as Date, event);
          }}
          dateFormat={dateFormat || mapLanguageToDateFormat(language as LANGUAGE)}
          locale={language as LANGUAGE}
          open={open}
          id={id}
          customInput={
            <TextField
              {...(textFieldProps as TextFieldProps)}
              label={label}
              error={hasError()}
              helperText={hasError() && hasErrorText() ? errorText : helperText}
              InputProps={{
                onFocus: () => shouldOpenOnFocus ? setOpen(true) : null,
                onBlur: () => setDirty(true),
                endAdornment: <InputAdornment position={'end'}>
                  <IconButton size={'small'} onClick={() => setOpen(true)}><TodayIcon /></IconButton>
                  {isClearable && <IconButton size={'small'} disabled={disabled} color={'secondary'} onClick={() => handleChangeValue(null)}><BackspaceIcon /></IconButton>}
                </InputAdornment>
              }}
            />
          }
        />
      </span>
    </ClickAwayListener>
  );
};

export default memo(DatePicker);
