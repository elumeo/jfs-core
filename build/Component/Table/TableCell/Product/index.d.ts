import React from 'react';
import { TableCellProps } from '@mui/material';
import { MediaUri } from '../../../../Types/MediaUri';
export type TableCellProductProps = Partial<TableCellProps> & {
    id?: string;
    rowIndex?: number;
    mediaUris?: MediaUri[];
    name?: string;
    productType?: string;
    inStockPool?: boolean;
    hasNoTvLock?: boolean;
    isProductBundle?: boolean;
    onClick?: (productId: string, rowIndex?: number) => void;
};
declare const Product: React.FC<TableCellProductProps>;
export default Product;
