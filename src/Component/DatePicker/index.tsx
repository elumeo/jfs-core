import React, { useState, useEffect, useRef, memo } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import './Setup';
import { LANGUAGE } from 'Types/Language';
import { useSelector } from 'Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';
import 'react-datepicker/dist/react-datepicker.css';
import { ClickAwayListener, TextField, TextFieldProps } from '@material-ui/core';

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
    event: (React.SyntheticEvent<any> | undefined)
  ) => void;
};

const setActive = (domNode: HTMLElement, isActive: boolean) => {
  if (domNode !== undefined) {
    if (isActive) {
      domNode.classList.add('is-active');
    } else {
      domNode.classList.remove('is-active');
    }
  }
};

const DatePicker = ({
                      label,
                      error = false,
                      customClearButtonId,
                      dateFormat,
                      value,
                      onChange,
                      errorText,
                      helperText = '',
                      floating,
                      isClearable,
                      textFieldProps,
                      ...rest
                    }: DatePickerProps) => {
  const language = useSelector(state => state.Core.Language.language);
  const { formatMessage } = useIntl();
  const [date, setDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [id] = useState('reactDatePicker_' + Math.floor(Math.random() * 100));
  const datePickerRef = useRef<ReactDatePicker>();

  const getInput = () => document.getElementById(id) as HTMLInputElement;

  const getInputParent = () => {
    const input = getInput();
    return input ? input.parentElement : null;
  };

  useEffect(() => setDate(value), [value]);

  useEffect(() => {
      document.getElementById(customClearButtonId)
        ?.addEventListener('click', () => {
          if (datePickerRef.current !== null) {
            // The clear method does exists => its just not in the typing
            // @ts-ignore
            datePickerRef.current.clear();
          }
        });
      const input = getInput();
      if (input) {
        input.addEventListener('keydown', (e: KeyboardEvent) => {
          if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        input.addEventListener('blur', () => {
          if (datePickerRef.current.isCalendarOpen() === false) {
            setActive(getInputParent(), false);
          }
          setDirty(true);
        });
        input.addEventListener('focus', () => setActive(getInputParent(), true));
      }
      const inputParent = getInputParent();
      if (inputParent !== null) {
        inputParent.setAttribute(
          'data-label',
          label !== null ? label : formatMessage({ id: 'form.datePicker.label' })
        );
      }
    },
    []
  );

  const hasErrorText = () => errorText !== undefined && errorText !== null && errorText !== '';
  const hasError = () => error || (dirty && rest.required && date === null);
  const getTextFieldProps = () => textFieldProps as TextFieldProps;

  return <ClickAwayListener onClickAway={() => setOpen(false)}>
      <span>
        <ReactDatePicker
          {...rest}
          wrapperClassName={classNames({ 'has-value': !!value })}
          onInputClick={() => setOpen(true)}
          ref={datePickerRef}
          selected={date}
          onChange={(newDate, event) => {
            if (isClearable !== true && newDate === null) {
              return;
            }
            setDate(newDate as Date);
            onChange(newDate as Date, date, event);
            if (datePickerRef.current.props.shouldCloseOnSelect) {
              setOpen(false);
            }
          }}
          onCalendarOpen={() => setActive(getInputParent(), true)}
          onCalendarClose={() => setActive(getInputParent(), false)}
          dateFormat={dateFormat || mapLanguageToDateFormat(language as LANGUAGE)}
          locale={language as LANGUAGE}
          open={open}
          id={id}
          customInput={<TextField label={label} error={hasError()} helperText={hasError() && hasErrorText() ? errorText : helperText} {...getTextFieldProps()} />}
        />
      </span>
  </ClickAwayListener>;
};

export default memo(DatePicker);
