import React from 'react';
import { TableCellProps } from '@mui/material';
export declare type TableCellProductProps = Partial<TableCellProps> & {
    id?: string;
    rowIndex?: number;
    mediaUri?: string;
    name?: string;
    productType?: string;
    inStockPool?: boolean;
    hasNoTvLock?: boolean;
    isProductBundle?: boolean;
    onClick?: (productId: string, rowIndex?: number) => void;
};
declare const _default: React.NamedExoticComponent<any>;
export default _default;
