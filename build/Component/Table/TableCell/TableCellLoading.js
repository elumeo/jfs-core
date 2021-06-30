import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';
import { virtualizedGlobalStyles } from '../../Table/VirtualizedTable';
const TableCellLoading = ({ rowHeight }) => {
    const globalStyles = virtualizedGlobalStyles();
    return React.createElement(TableCell, { component: 'div', className: clsx(globalStyles.tableCell, globalStyles.flexContainer), variant: 'body', style: { height: rowHeight } },
        React.createElement(Skeleton, { variant: 'text', width: '100%', animation: 'wave' }));
};
export default memo(TableCellLoading);
