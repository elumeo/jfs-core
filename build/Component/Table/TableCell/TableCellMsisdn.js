import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import clsx from 'clsx';
import FormattedMsisdn from '../../FormattedMsisdn';
import { globalStyles } from '../../Table/VirtualizedTable';
import { cellStyles } from '../../Table/TableCell/TableCellDefault';
import TableCellLoading from '../../Table/TableCell/TableCellLoading';
const TableCellMsisdn = ({ cellProps, rowHeight, isLoading = false }) => {
    const classes = cellStyles();
    const globalClasses = globalStyles();
    return React.createElement(React.Fragment, null,
        isLoading === false && React.createElement(TableCell, { component: 'div', className: clsx(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body', style: { height: rowHeight } }, cellProps.cellData && React.createElement("span", { className: classes.wrapContent },
            React.createElement(FormattedMsisdn, { msisdn: cellProps.cellData })) || '-'),
        isLoading && React.createElement(TableCellLoading, null));
};
export default memo(TableCellMsisdn);
