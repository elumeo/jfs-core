import React from 'react';
import { TableCellProps } from '@mui/material';
export type Props = TableCellProps & {
    isNumeric?: boolean;
};
declare const Root: React.FC<Props>;
export default Root;
