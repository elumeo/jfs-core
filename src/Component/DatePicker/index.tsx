import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Setup';
import OutsideClickHandler from 'react-outside-click-handler';
import TranslationsProvider from '../../Store/Provider/Translations';
import International from '../International';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import './styles.scss'

enum DateFormat {
  DE = 'dd.MM.yy',
  EN = 'dd/MM/yy',
  ES = 'dd/MM/yy',
  FR = 'dd/MM/yy',
  NL = 'dd-MM-yy',
  IT = 'dd/MM/yy'
}

const mapLanguageToDateFormat = (language: 'de' | 'en' | 'it') => {
  switch (language) {
    case 'de':
      return DateFormat.DE;
    case 'en':
      return DateFormat.EN;
    case 'it':
      return DateFormat.IT;
    default:
      return DateFormat.DE;
  }
}

namespace DatePicker {
  export type Props = {
    label?: string;
    customClearButtonId: string;
    value: Date;
    onChange: (newDate: Date, oldDate: Date, event: (React.SyntheticEvent<any> | undefined)) => void;
  } & ReactDatePickerProps & InjectedIntlProps;
}

const DatePicker: React.FC<DatePicker.Props> = ({
                                                  label,
                                                  customClearButtonId,
                                                  dateFormat,
                                                  value,
                                                  onChange,
                                                  intl: {formatMessage},
                                                  ...rest
                                                }) => {
  const [date, setDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);
  const [id] = useState(Math.floor(Math.random() * 100));
  const datePickerRef = useRef<ReactDatePicker>();

  useEffect(() => {
    const domNode = document.getElementById(id.toString());
    if (domNode) {
      domNode.parentNode.addEventListener(
        'click',
        () => setOpen(true)
      );
    }
  });

  useEffect(() => {
    document.getElementById(customClearButtonId)?.addEventListener('click', () => {
      // The clear method exists
      datePickerRef.current.clear();
    });
    const input = getInput();
    input.addEventListener('keydown', _handleKeyupEventOnCustomInputField);
    input.addEventListener('blur', _handleBlurEventOnCustomInputField);
    const finalLabel = label !== null ? label : formatMessage({id: 'form.datePicker.label'});
    getInputParent().setAttribute('data-label', finalLabel);
  }, []);

  const _handleKeyupEventOnCustomInputField = (e: KeyboardEvent) => {
    const input = getInput();
    if (document.activeElement.id === input.id && e.keyCode === 9 && e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const _handleBlurEventOnCustomInputField = () => {
    checkRawHasValue();
    if (datePickerRef.current.isCalendarOpen() === false) {
      setActive(false);
    }
  };

  const checkRawHasValue = () => {
    const input = getInput();
    if (input.value === '') {
      setHasValue(false);
    } else {
      setHasValue(true);
    }
  }

  const setHasValue = (hasValue: boolean) => {
    const inputParent = getInputParent();
    if (hasValue) {
      inputParent.classList.add('has-value');
    } else {
      inputParent.classList.remove('has-value');
    }
  }

  const setActive = (isActive: boolean) => {
    const inputParent = getInputParent();
    if (isActive) {
      inputParent.classList.add('is-active');
    } else {
      inputParent.classList.remove('is-active');
    }
  }

  const getInput = () => {
    return datePickerRef.current.input as HTMLInputElement;
  };

  const getInputParent = () => {
    return getInput().parentElement;
  };

  return (
    <International>
      {/* tslint:disable-next-line:no-shadowed-variable */}
      {() => (
        <TranslationsProvider>
          {({state: {language}}) => {
            return (
              <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
                <ReactDatePicker
                  {...rest}
                  ref={datePickerRef}
                  selected={date}
                  onChange={(newDate, event) => {
                    setHasValue(newDate !== null);
                    setDate(newDate as Date);
                    onChange(newDate as Date, date, event);
                    if (datePickerRef.current.props.shouldCloseOnSelect) {
                      setOpen(false);
                    }
                  }}
                  onCalendarOpen={() => {
                    setActive(true);
                    // addEventListenerToCustomInputField();
                  }}
                  onCalendarClose={() => {
                    setActive(false);
                    // removeEventListenerToCustomInputField();
                  }}
                  dateFormat={dateFormat || mapLanguageToDateFormat(
                    language as 'de' | 'it' | 'en'
                  )}
                  locale='de'
                  open={open}
                  id={id.toString()}
                  customInput={<input className='md-full-width md-text md-text-field customDatePickerInputField'/>}
                />
              </OutsideClickHandler>
            )
          }}
        </TranslationsProvider>
      )}
    </International>
  );
}

export default injectIntl(DatePicker);
