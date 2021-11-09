import React from 'react';
import { SortDirectionType } from 'react-virtualized';
export declare type TableHeadDefaultBaseProps = {
    height?: number;
    isNumeric?: boolean;
    className?: string;
    disableSort?: boolean;
    sortBy?: string;
    sortDirection?: SortDirectionType;
    label?: string;
    dataKey: string;
};
declare const _default: React.MemoExoticComponent<({ height, isNumeric, disableSort, sortBy, sortDirection, label, dataKey, className }: TableHeadDefaultBaseProps) => JSX.Element>;
export default _default;
