/// <reference types="react" />
import { StandardTextFieldProps } from '@material-ui/core';
declare type Props = {
    currency?: string;
    selectOnFocus?: boolean;
} & Partial<StandardTextFieldProps>;
declare const PriceField: ({ currency, value, selectOnFocus, ...props }: Props) => JSX.Element;
export default PriceField;
