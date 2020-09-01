import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InjectedIntlProps } from 'react-intl';
import './Setup';
import './_styles.scss';
declare namespace DatePicker {
    type Props = {
        label?: string;
        customClearButtonId?: string;
        value: Date;
        state?: {
            language: string;
        };
        onChange: (newDate: Date, oldDate: Date, event: (React.SyntheticEvent<any> | undefined)) => void;
    } & ReactDatePickerProps & InjectedIntlProps;
}
declare const DatePicker: React.FC<DatePicker.Props>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<DatePicker.Props>, Pick<DatePicker.Props, never> & {
    label?: string;
    customClearButtonId?: string;
    value: Date;
    state?: {
        language: string;
    };
    onChange: (newDate: Date, oldDate: Date, event: React.SyntheticEvent<any, Event>) => void;
} & ReactDatePickerProps & InjectedIntlProps>;
export default _default;
