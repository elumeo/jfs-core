import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { InjectedIntl, injectIntl } from 'react-intl';
import classNames from 'classnames';

import './Setup';
import { LANGUAGE } from 'Types/Language';
import './_styles.scss'
import { useSelector } from 'Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';

export type Props = Omit<ReactDatePickerProps, 'value'> & {
  intl?: InjectedIntl;
  label?: string;
  customClearButtonId?: string;
  value: Date;
  state?: { language: string };
  errorText?: string;
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
}

const setError = (domNode: HTMLElement, error: boolean) => {
  if (domNode !== undefined) {
    if (error && !domNode.classList.contains('error')) {
      domNode.classList.add('error');
    } else if (!error && domNode.classList.contains('error')) {
      domNode.classList.remove('error');
    }
  }
}

const setFloating = (domNode: HTMLElement, floating: boolean) => {
  if (domNode !== undefined) {
    if (floating && !domNode.classList.contains('floating')) {
      domNode.classList.add('floating');
    } else if (!floating && domNode.classList.contains('floating')) {
      domNode.classList.remove('floating');
    }
  }
}

const DatePicker: React.FC<Props> = ({
                                       label,
                                       customClearButtonId,
                                       dateFormat,
                                       value,
                                       onChange,
                                       errorText,
                                       floating,
                                       intl: {formatMessage},
                                       isClearable,
                                       ...rest
                                     }) => {
  const language = useSelector(state => state.Core.Language.language);
  const [date, setDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);
  const [id] = useState('reactDatePicker_' + Math.floor(Math.random() * 100));
  const datePickerRef = useRef<ReactDatePicker>();

  const getInput = () => {
    return document.getElementById(id) as HTMLInputElement;
  };

  const getInputParent = () => {
    const input = getInput();
    if (input) {
      return input.parentElement;
    }
    return null;
  };

  useEffect(
    () => {
      const parent = getInputParent();
      if (parent) {
        setError(parent, Boolean(errorText));
        setFloating(parent, floating);
      }
    },
    [errorText || '']
  );

  useEffect(
    () => setDate(value),
    [value]
  );

  useEffect(
    () => {
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
          if (
            document.activeElement.id === input.id &&
            e.keyCode === 9 &&
            e.shiftKey
          ) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        input.addEventListener('blur', () => {
          if (datePickerRef.current.isCalendarOpen() === false) {
            setActive(getInputParent(), false);
          }
        });
        input.addEventListener('focus', () => {
          setActive(getInputParent(), true);
        });
      }
      const inputParent = getInputParent();
      if (inputParent !== null) {
        const finalLabel = (
          label !== null
            ? label
            : formatMessage({id: 'form.datePicker.label'})
        );
        inputParent.setAttribute('data-label', finalLabel);
      }
    },
    []
  );
  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
      <span>
        <ReactDatePicker
          {...rest}
          wrapperClassName={classNames({
            'has-value': !!value
          })}
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
          onCalendarOpen={() => {
            setActive(getInputParent(), true);
          }}
          onCalendarClose={() => {
            setActive(getInputParent(), false);
          }}
          dateFormat={dateFormat || mapLanguageToDateFormat(
            language as LANGUAGE
          )}
          locale={language as LANGUAGE}
          open={open}
          id={id}
          customInput={
            <input
              className={[
                'md-full-width',
                'md-text',
                'md-text-field',
                'customDatePickerInputField'
              ].join(' ')}/>
          }/>
        {errorText && (
          <div
            className='md-text-field-message-container md-full-width'
            style={{color: 'rgb(183, 28, 28)'}}>
            {errorText}
          </div>
        )}
      </span>
    </OutsideClickHandler>
  );
}

const enhance = injectIntl;

export default enhance(DatePicker);
