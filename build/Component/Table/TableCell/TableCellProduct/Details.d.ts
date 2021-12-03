import React from 'react';
export declare type DetailsProps = {
    id?: string;
    name?: string;
    productType?: string;
    inStockPool?: boolean;
    hasNoTvLock?: boolean;
    onClick?: HTMLElement['click'];
};
declare const _default: React.MemoExoticComponent<({ id, name, productType, inStockPool, hasNoTvLock, onClick }: DetailsProps) => JSX.Element>;
export default _default;
