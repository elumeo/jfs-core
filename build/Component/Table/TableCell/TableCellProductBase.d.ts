import React from 'react';
export declare type TableCellProductBaseProps = {
    id?: string;
    mediaUri?: string;
    name?: string;
    productType?: string;
    inStockPool?: boolean;
    hasNoTvLock?: boolean;
    isProductBundle?: boolean;
    bundleProductIds?: string[];
    className?: string;
    onClick?: (productIds: string[]) => void;
};
declare const _default: React.MemoExoticComponent<({ id, mediaUri, name, productType, inStockPool, hasNoTvLock, isProductBundle, bundleProductIds, className, onClick }: TableCellProductBaseProps) => JSX.Element>;
export default _default;
