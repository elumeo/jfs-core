import { InjectedIntlProps } from 'react-intl';
import { TextFieldProps } from 'react-md';
declare type TPriceInputProps = {
    currency: string;
};
declare const _default: ({ id, value, onChange, label, error, currency, errorText, inputClassName, className, helpText, min, max, ...rest }: TPriceInputProps & InjectedIntlProps & TextFieldProps) => JSX.Element;
export default _default;
