import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InjectedIntl } from 'react-intl';
import './Setup';
import './_styles.scss';
export declare type Props = Omit<ReactDatePickerProps, 'value'> & {
    intl?: InjectedIntl;
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
declare const _default: React.FC<Props>;
export default _default;
