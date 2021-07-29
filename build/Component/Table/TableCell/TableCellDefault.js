import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { globalStyles } from '../../Table/VirtualizedTable';
import { TableCellLoading } from '../../Table/TableCell';
export const cellStyles = makeStyles(() => createStyles({
    wrapContent: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    }
}));
const TableCellDefault = ({ cellData, isNumeric = false, wrapContent = true }) => {
    const classes = cellStyles();
    const globalClasses = globalStyles();
    return (cellData && React.createElement(TableCell, { component: 'div', className: clsx(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body', style: { height: '100%' }, align: isNumeric ? 'right' : 'left' },
        React.createElement("span", { className: clsx({ [classes.wrapContent]: wrapContent }) }, cellData))) || React.createElement(TableCellLoading, null);
};
export default memo(TableCellDefault);
