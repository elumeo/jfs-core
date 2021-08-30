import React, { memo } from 'react';
import { TableCellProps } from 'react-virtualized';
import { TableCell } from '@material-ui/core';
import clsx from 'clsx';

import FormattedMsisdn from 'Component/FormattedMsisdn';
import { globalStyles } from 'Component/Table/VirtualizedTable';
import { cellStyles } from 'Component/Table/TableCell/TableCellDefault';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoading';

export type TableCellMsisdnProps = {
  cellProps: TableCellProps;
  rowHeight: number;
  isLoading?: boolean;
};

const TableCellMsisdn = ({ cellProps, rowHeight, isLoading = false }: TableCellMsisdnProps) => {
  const classes = cellStyles();
  const globalClasses = globalStyles();

  return <>
    {isLoading === false && <TableCell
      component={'div'}
      className={clsx(globalClasses.tableCell, globalClasses.flexContainer)}
      variant={'body'}
      style={{ height: rowHeight }}
    >
      {cellProps.cellData && <span className={classes.wrapContent}><FormattedMsisdn msisdn={cellProps.cellData} /></span> || '-'}
    </TableCell>}
    {isLoading && <TableCellLoading />}
  </>;
};

export default memo(TableCellMsisdn);
