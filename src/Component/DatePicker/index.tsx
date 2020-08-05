import React, { useState, useEffect, useRef } from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Setup';
import OutsideClickHandler from 'react-outside-click-handler';
import International from '../International';
import Global from 'Store/Reducer/Global';
import { LANGUAGE, DATE_FORMAT } from 'Types/Language';
import { connect } from 'react-redux';

const mapLanguageToDateFormat = (language: LANGUAGE) => {
  switch (language) {
    case LANGUAGE.GERMAN: return DATE_FORMAT.DE;
    case LANGUAGE.ENGLISH: return DATE_FORMAT.EN;
    case LANGUAGE.ITALIAN: return DATE_FORMAT.IT;
    default: return DATE_FORMAT.DE;
  }
}

namespace DatePicker {
  export type Props = {
    value: Date;
    onChange: (newDate: Date) => void;
    state?: { language: string };
  } & ReactDatePickerProps;
}

const DatePicker: React.FC<DatePicker.Props> = ({
  customInput,
  dateFormat,
  value,
  onChange,
  state: { language },
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
              language as LANGUAGE
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
    </International>
  );
}

const enhance = connect(
  (state: Global.State, ownProps: DatePicker.Props): DatePicker.Props => ({
    ...ownProps,
    state: state.Core.Language
  })
);

export default enhance(DatePicker);
