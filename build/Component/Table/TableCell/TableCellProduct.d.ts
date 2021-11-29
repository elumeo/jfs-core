import React from 'react';
import { TableCellRootProps } from '../../Table/TableCell/TableCellRoot';
export declare type TableCellProductProps = Partial<TableCellRootProps> & {
    id?: string;
    mediaUri?: string;
    name?: string;
    productType?: string;
    inStockPool?: boolean;
    hasNoTvLock?: boolean;
    isProductBundle?: boolean;
    bundleProductIds?: string[];
    onClick?: (productIds: string[]) => void;
};
declare const _default: React.MemoExoticComponent<({ id, mediaUri, name, productType, inStockPool, hasNoTvLock, isProductBundle, bundleProductIds, onClick, ...rest }: TableCellProductProps) => JSX.Element>;
export default _default;
