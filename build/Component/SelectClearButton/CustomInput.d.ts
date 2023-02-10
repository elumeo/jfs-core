import { InputBaseProps } from '@mui/material';
import React from 'react';
import { SelectProps } from './SelectClearButton';
type Props = InputBaseProps & {
    variant: SelectProps['variant'];
    label: React.ReactNode;
    canClear: boolean;
    onClear: () => void;
};
declare const CustomInput: React.FC<Props>;
export default CustomInput;
