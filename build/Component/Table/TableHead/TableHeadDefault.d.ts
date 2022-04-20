import React from 'react';
import { SortDirectionType } from 'react-virtualized';
export declare type TableHeadDefaultProps = {
    height?: number;
    isNumeric?: boolean;
    disableSort?: boolean;
    sortBy?: string;
    sortDirection?: SortDirectionType;
    label?: React.ReactNode;
    dataKey: string;
};
declare const _default: React.MemoExoticComponent<({ height, isNumeric, disableSort, sortBy, sortDirection, label, dataKey }: TableHeadDefaultProps) => JSX.Element>;
export default _default;
