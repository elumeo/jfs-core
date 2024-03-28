import React from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
export type TableCellRootProps = {
    children: React.ReactNode;
    isNumeric?: boolean;
    height?: number | string;
    styles?: CSSProperties;
};
declare const _default: React.MemoExoticComponent<({ children, isNumeric, height, styles }: TableCellRootProps) => React.JSX.Element>;
export default _default;
