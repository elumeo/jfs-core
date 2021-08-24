import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import clsx from 'clsx';
import FormattedMsisdn from '../../FormattedMsisdn';
import { globalStyles } from '../../Table/VirtualizedTable';
import { cellStyles } from '../../Table/TableCell/TableCellDefault';
import TableCellLoading from '../../Table/TableCell/TableCellLoading';
const TableCellMsisdn = ({ cellProps, rowHeight }) => {
    const classes = cellStyles();
    const globalClasses = globalStyles();
    return ((cellProps.cellData !== null && (React.createElement(TableCell, { component: 'div', className: clsx(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body', style: { height: rowHeight } },
        React.createElement("span", { className: classes.wrapContent },
            React.createElement(FormattedMsisdn, { msisdn: cellProps.cellData }))))) || React.createElement(TableCellLoading, null));
};
export default memo(TableCellMsisdn);
