import React from 'react';
import { TableCellProps } from '@mui/material';
export type Props = Partial<TableCellProps> & {
    value: string;
    isLoading?: boolean;
};
declare const Msisdn: React.FC<Props>;
export default Msisdn;
