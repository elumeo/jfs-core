import { ChipProps } from '@mui/material';
import React from 'react';
export type ValueType<IsMulti = boolean> = IsMulti extends true ? string[] : string;
export type Props = ChipProps & {
    renderAsChip: boolean;
    maxValuesToDisplayInInput: number;
    values: ValueType<true>;
    labelsByValue: Record<string, string>;
    canUnselect: boolean;
    unselect: (value: ValueType<true>[number]) => void;
};
declare const ValueRenderer: React.FC<Props>;
export default ValueRenderer;
