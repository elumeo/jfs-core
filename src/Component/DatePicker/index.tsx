import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { InjectedIntl, injectIntl } from 'react-intl';

import './Setup';
import { LANGUAGE } from 'Types/Language';
import './_styles.scss'
import { useSelector } from 'Types/Redux';
import mapLanguageToDateFormat from './mapLanguageToDateFormat';

export type Props = ReactDatePickerProps & {
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

const setHasValue = (domNode: HTMLElement, hasValue: boolean) => {
  if (domNode !== undefined) {
    if (hasValue) {
      domNode.classList.add('has-value');
    } else {
      domNode.classList.remove('has-value');
    }
  }
}

const setError = (domNode: HTMLElement, error: boolean) => {
  if (domNode !== undefined) {
    if (error && !domNode.classList.contains('error')) {
      domNode.classList.add('error');
    }
    else if (!error && domNode.classList.contains('error')) {
      domNode.classList.remove('error');
    }
  }
}

const setFloating = (domNode: HTMLElement, floating: boolean) => {
  if (domNode !== undefined) {
    if (floating && !domNode.classList.contains('floating')) {
      domNode.classList.add('floating');
    }
    else if (!floating && domNode.classList.contains('floating')) {
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
  ...rest
}) => {
  const language = useSelector(state => state.Core.Language.language);
  const [date, setDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);
  const [id] = useState(Math.floor(Math.random() * 100));
  const datePickerRef = useRef<ReactDatePicker>();

  const getInput = () => {
    // The clear method does exists => its just not in the typing
    // @ts-ignore
    return datePickerRef.current?.input as HTMLInputElement;
  };

  const getInputParent = () => {
    const input = getInput();
    if (input) {
      return input.parentElement;
    }
    return undefined;
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
    () => {
      const domNode = document.getElementById(id.toString());
      if (domNode) {
        domNode.parentNode.addEventListener(
          'click',
          () => setOpen(true)
        );
      }
    }
  );

  useEffect(
    () => {
      if (value && document.getElementById(id.toString()).parentNode) {
        setHasValue(
          document.getElementById(id.toString()).parentNode as HTMLElement,
          true
        );
      }
    },
    [document.getElementById(id.toString())]
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
          const input = getInput();
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
          const input = getInput();
          if (input) {
            if (input.value === '' && !floating) {
              setHasValue(getInputParent(), false);
            } else {
              setHasValue(getInputParent(), true);
            }
          }
          if (datePickerRef.current.isCalendarOpen() === false) {
            setActive(getInputParent(), false);
          }
        });
      }
      const inputParent = getInputParent();
      if (inputParent !== undefined) {
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
          ref={datePickerRef}
          selected={date}
          onChange={(newDate, event) => {
            setHasValue(getInputParent(), newDate !== null || floating);
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
          locale='de'
          open={open}
          id={id.toString()}
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
