import React, { useState, useEffect, useRef } from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Setup';
import OutsideClickHandler from 'react-outside-click-handler';
import TranslationsProvider from '../../Store/Provider/Translations';
import International from '../International';

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
    case 'de': return DateFormat.DE;
    case 'en': return DateFormat.EN;
    case 'it': return DateFormat.IT;
    default: return DateFormat.DE;
  }
}

namespace DatePicker {
  export type Props = {
    value: Date;
    onChange: (newDate: Date) => void;
  } & ReactDatePickerProps;
}

const DatePicker: React.FC<DatePicker.Props> = ({
  customInput,
  dateFormat,
  value,
  onChange,
  ...rest
}) => {
  const [date, setDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);
  const [id] = useState(Math.floor(Math.random() * 100));
  const datePickerRef = useRef<ReactDatePicker>();

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

  return (
    <International>
      {({ formatMessage }) => (
        <TranslationsProvider>
          {({ state: { language } }) => (
            <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
              <ReactDatePicker
                {...rest}
                ref={datePickerRef}
                selected={date}
                onChange={(newDate) => {
                  setDate(newDate);
                  onChange(newDate);
                  if (datePickerRef.current.props.shouldCloseOnSelect) {
                    setOpen(false);
                  }
                }}
                dateFormat={dateFormat || mapLanguageToDateFormat(
                  language as 'de' | 'it' | 'en'
                )}
                locale='de'
                open={open}
                id={id.toString()}
                customInput={
                  customInput ||
                  <TextField
                    label={formatMessage({ id: 'date' })}
                    id={id}/>
                }/>
            </OutsideClickHandler>
          )}
        </TranslationsProvider>
      )}
    </International>
  );
}

export default DatePicker;
