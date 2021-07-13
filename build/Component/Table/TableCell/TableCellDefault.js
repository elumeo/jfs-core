import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { virtualizedGlobalStyles } from '../../Table/VirtualizedTable';
import { TableCellLoading } from '../../Table/TableCell';
export const cellStyles = makeStyles(() => createStyles({
    cellContent: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));
const TableCellDefault = ({ cellData, isNumeric = false }) => {
    const cellClasses = cellStyles();
    const globalStyles = virtualizedGlobalStyles();
    return (cellData && React.createElement(TableCell, { component: 'div', className: clsx(globalStyles.tableCell, globalStyles.flexContainer), variant: 'body', style: { height: '100%' }, align: isNumeric ? 'right' : 'left' },
        React.createElement("span", { className: cellClasses.cellContent }, cellData))) || React.createElement(TableCellLoading, null);
};
export default memo(TableCellDefault);
