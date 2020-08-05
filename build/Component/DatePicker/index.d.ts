import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Setup';
declare namespace DatePicker {
    type Props = {
        value: Date;
        onChange: (newDate: Date) => void;
        state?: {
            language: string;
        };
    } & ReactDatePickerProps;
}
declare const DatePicker: React.FC<DatePicker.Props>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<DatePicker.Props>, Pick<DatePicker.Props, never> & {
    value: Date;
    onChange: (newDate: Date) => void;
    state?: {
        language: string;
    };
} & ReactDatePickerProps>;
export default _default;
