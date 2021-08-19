import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import './Setup';
import 'react-datepicker/dist/react-datepicker.css';
export declare type DatePickerProps = Omit<ReactDatePickerProps, 'value'> & {
    label?: string;
    customClearButtonId?: string;
    value: Date;
    state?: {
        language: string;
    };
    errorText?: string;
    floating?: boolean;
    onChange: (newDate: Date, oldDate: Date, event: (React.SyntheticEvent<any> | undefined)) => void;
};
declare const _default: React.MemoExoticComponent<({ label, customClearButtonId, dateFormat, value, onChange, errorText, floating, isClearable, ...rest }: DatePickerProps) => JSX.Element>;
export default _default;
