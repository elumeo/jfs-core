import React from 'react';
import { TableCellProps } from '@mui/material';
export type Props = Partial<TableCellProps> & {
    value: Date | string;
    noValueElement?: React.ReactNode;
    asTwoLines?: boolean;
    displayTime: boolean;
};
declare const _default: React.MemoExoticComponent<({ value, noValueElement, asTwoLines, displayTime, ...rest }: Props) => JSX.Element>;
export default _default;
