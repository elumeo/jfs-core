import React from 'react';
import { TableCellRootProps } from '../../../Table/TableCell/TableCellRoot';
import { MediaUri } from '../../../../Types/MediaUri';
export declare type TableCellProductProps = Partial<TableCellRootProps> & {
    id?: string;
    mediaUris?: MediaUri[];
    name?: string;
    productType?: string;
    inStockPool?: boolean;
    hasNoTvLock?: boolean;
    isProductBundle?: boolean;
    onClick?: HTMLElement['click'];
};
declare const _default: React.MemoExoticComponent<({ id, mediaUris, name, productType, inStockPool, hasNoTvLock, isProductBundle, onClick, ...rest }: TableCellProductProps) => JSX.Element>;
export default _default;
