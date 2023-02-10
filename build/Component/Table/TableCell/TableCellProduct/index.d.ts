import React from 'react';
import { TableCellRootProps } from '../../../Table/TableCell/TableCellRoot';
import { MediaUri } from '../../../../Types/MediaUri';
export type TableCellProductProps = Partial<TableCellRootProps> & {
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
declare const TableCellProduct: React.FC<TableCellProductProps>;
export default TableCellProduct;
