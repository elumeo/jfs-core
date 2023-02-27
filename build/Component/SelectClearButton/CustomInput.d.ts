import { InputProps } from '@mui/material';
import React from 'react';
import { SelectProps } from './SelectClearButton';
type Props = InputProps & {
    variant: SelectProps['variant'];
    label: React.ReactNode;
    canClear: boolean;
    onClear: () => void;
    helperText?: React.ReactNode;
};
declare const CustomInput: React.FC<Props>;
export default CustomInput;
