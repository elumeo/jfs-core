import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';
import clsx from 'clsx';
import FormattedMsisdn from '../../../../Component/FormattedMsisdn';
import { virtualizedGlobalStyles } from '../../../../Component/Table/VirtualizedTable';
import { cellStyles } from '../../../../Component/Table/TableCell/TableCellDefault';
import TableCellLoading from '../../../../Component/Table/TableCell/TableCellLoading';
const TableCellMsisdn = ({ cellProps, rowHeight }) => {
    const cellClasses = cellStyles();
    const globalStyles = virtualizedGlobalStyles();
    return (cellProps.cellData !== null && React.createElement(TableCell, { component: 'div', className: clsx(globalStyles.tableCell, globalStyles.flexContainer), variant: 'body', style: { height: rowHeight } },
        React.createElement("span", { className: cellClasses.cellContent },
            React.createElement(FormattedMsisdn, { msisdn: cellProps.cellData })))) ||
        React.createElement(TableCellLoading, { rowHeight: rowHeight });
};
export default memo(TableCellMsisdn);
