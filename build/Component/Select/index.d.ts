import React, { ReactNode } from 'react';
import { FormControlProps, SelectProps } from '@mui/material';
export type Props<T = unknown> = SelectProps<T> & {
    canClear?: boolean;
    maxValuesShown?: number;
    helperText?: ReactNode;
    loading?: boolean;
    formControlProps?: FormControlProps;
};
declare const Select: <T>({ children, helperText, loading, maxValuesShown, canClear, formControlProps, ...selectProps }: React.PropsWithChildren<Props<T>>) => React.JSX.Element;
export default Select;
