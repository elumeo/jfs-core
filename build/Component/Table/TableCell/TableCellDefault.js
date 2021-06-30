import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { virtualizedGlobalStyles } from '../../Table/VirtualizedTable';
import TableCellLoading from '../../Table/TableCell/TableCellLoading';
export const cellStyles = makeStyles(() => createStyles({
    cellContent: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));
const TableCellDefault = ({ cellProps, rowHeight }) => {
    const cellClasses = cellStyles();
    const globalStyles = virtualizedGlobalStyles();
    return (cellProps.rowData && React.createElement(TableCell, { component: 'div', className: clsx(globalStyles.tableCell, globalStyles.flexContainer), variant: 'body', style: { height: rowHeight } },
        React.createElement("span", { className: cellClasses.cellContent }, cellProps.cellData))) || React.createElement(TableCellLoading, { rowHeight: rowHeight });
};
export default memo(TableCellDefault);
