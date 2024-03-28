import React from 'react';
import { SortDirectionType } from 'react-virtualized';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
export type TableHeadDefaultProps = {
    height?: number;
    isNumeric?: boolean;
    disableSort?: boolean;
    sortBy?: string;
    sortDirection?: SortDirectionType;
    label?: React.ReactNode;
    dataKey: string;
    styles?: CSSProperties;
};
declare const _default: React.MemoExoticComponent<({ height, isNumeric, disableSort, sortBy, sortDirection, label, dataKey, styles }: TableHeadDefaultProps) => React.JSX.Element>;
export default _default;
