import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import './Setup';
import 'react-datepicker/dist/react-datepicker.css';
import { TextFieldProps } from '@material-ui/core';
export declare type DatePickerProps = Omit<ReactDatePickerProps, 'value'> & {
    label?: string;
    error?: boolean;
    customClearButtonId?: string;
    value: Date;
    state?: {
        language: string;
    };
    errorText?: string;
    helperText?: string;
    textFieldProps?: Partial<TextFieldProps>;
    floating?: boolean;
    onChange: (newDate: Date, oldDate: Date, event: React.SyntheticEvent<unknown> | undefined) => void;
};
declare const _default: React.MemoExoticComponent<({ label, error, customClearButtonId, dateFormat, value, onChange, errorText, helperText, isClearable, textFieldProps, ...rest }: DatePickerProps) => JSX.Element>;
export default _default;
