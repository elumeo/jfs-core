import React, { ReactNode } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import './Setup';
import 'react-datepicker/dist/react-datepicker.css';
import { TextFieldProps } from '@material-ui/core';
export declare type DatePickerProps = Omit<ReactDatePickerProps<string>, 'value'> & {
    label?: ReactNode;
    error?: boolean;
    customClearButtonId?: string;
    value: Date;
    state?: {
        language: string;
    };
    errorText?: ReactNode;
    helperText?: ReactNode;
    textFieldProps?: Partial<TextFieldProps>;
    floating?: boolean;
    onChange: (newDate: Date, oldDate: Date, event: React.SyntheticEvent<unknown> | undefined) => void;
    shouldOpenOnFocus?: boolean;
    disabled?: boolean;
    isClearable?: boolean;
};
declare const _default: React.MemoExoticComponent<({ label, error, customClearButtonId, dateFormat, value, onChange, errorText, helperText, textFieldProps, shouldOpenOnFocus, disabled, isClearable, ...rest }: DatePickerProps) => JSX.Element>;
export default _default;
