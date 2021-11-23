import React from 'react';
export declare type TableCellProductProps = {
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
declare const _default: React.MemoExoticComponent<({ id, mediaUri, name, productType, inStockPool, hasNoTvLock, isProductBundle, bundleProductIds, onClick }: TableCellProductProps) => JSX.Element>;
export default _default;
