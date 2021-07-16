import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import clsx from 'clsx';
import { globalStyles } from '../../Table/VirtualizedTable';
const TableCellLoading = () => {
    const globalClasses = globalStyles();
    return React.createElement(TableCell, { component: 'div', className: clsx(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body' },
        React.createElement(Skeleton, { variant: 'text', width: '100%', height: '100%', animation: 'wave' }));
};
export default memo(TableCellLoading);
