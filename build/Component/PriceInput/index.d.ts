/// <reference types="react" />
import { TextFieldProps } from 'react-md';
declare type TPriceInputProps = {
    currency: string;
    selectOnFocus?: boolean;
};
declare const PriceInput: ({ id, selectOnFocus, value, onChange, label, error, currency, errorText, inputClassName, className, helpText, min, max, ...rest }: TPriceInputProps & TextFieldProps) => JSX.Element;
export default PriceInput;
