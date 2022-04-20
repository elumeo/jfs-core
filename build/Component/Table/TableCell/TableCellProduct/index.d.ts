import React from 'react';
import { TableCellRootProps } from '../../../Table/TableCell/TableCellRoot';
import { MediaUri } from '../../../../Types/MediaUri';
export declare type TableCellProductProps = Partial<TableCellRootProps> & {
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
declare const _default: React.MemoExoticComponent<({ id, rowIndex, mediaUris, name, productType, inStockPool, hasNoTvLock, isProductBundle, onClick, ...rest }: TableCellProductProps) => JSX.Element>;
export default _default;
