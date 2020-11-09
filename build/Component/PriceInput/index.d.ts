/// <reference types="react" />
import { TextFieldProps } from 'react-md';
declare type TPriceInputProps = {
    currency: string;
    selectOnFocus?: boolean;
    rawOnChange?: (value: number | string, event: Event) => void;
};
declare const PriceInput: ({ id, selectOnFocus, value, onChange, label, error, currency, errorText, inputClassName, className, helpText, min, max, onFocus, onBlur, rawOnChange, ...rest }: TPriceInputProps & TextFieldProps) => JSX.Element;
export default PriceInput;
