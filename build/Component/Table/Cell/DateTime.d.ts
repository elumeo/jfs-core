import React from 'react';
import { TableCellProps } from '@mui/material';
export type Props = Partial<TableCellProps> & {
    value: Date | string;
    noValueElement?: React.ReactNode;
    asTwoLines?: boolean;
};
declare const DateTime: ({ value, noValueElement, asTwoLines, ...rest }: Props) => JSX.Element;
export default DateTime;
