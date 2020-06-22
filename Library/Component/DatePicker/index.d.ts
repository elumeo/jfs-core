import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Setup';
declare namespace DatePicker {
    type Props = ReactDatePickerProps & {
        value: Date;
        onChange: (newDate: Date) => void;
        state?: {
            language: string;
        };
    };
}
declare const DatePicker: React.FC<DatePicker.Props>;
declare const _default: import("react-redux").ComponentClass<DatePicker.Props>;
export default _default;
