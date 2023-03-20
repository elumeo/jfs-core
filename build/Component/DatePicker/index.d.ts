import { ReactDatePickerProps } from 'react-datepicker';
import './Setup';
import { LANGUAGE } from '../../Types/Language';
import 'react-datepicker/dist/react-datepicker.css';
import { Props } from '../TextField';
export type DatePickerProps<IsRangePicker extends boolean = undefined> = ReactDatePickerProps<null, IsRangePicker> & {
    textFieldProps?: Partial<Props>;
    language?: LANGUAGE;
    shouldOpenOnFocus?: boolean;
    isClearable?: boolean;
    color?: 'primary' | 'secondary';
};
declare const DatePicker: <IsRangePicker extends boolean = undefined>({ dateFormat, color, language: languageFromProp, onChange, textFieldProps, shouldOpenOnFocus, shouldCloseOnSelect, disabled, isClearable, ...rest }: DatePickerProps<IsRangePicker>) => JSX.Element;
export default DatePicker;
