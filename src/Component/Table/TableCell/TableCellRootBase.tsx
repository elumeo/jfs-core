import React, { memo } from 'react';
import { TableCell } from '@material-ui/core';

export type TableCellRootBaseProps = {
  children: React.ReactNode,
  isNumeric?: boolean;
  rowHeight?: number | string;
  className?: string;
};

const TableCellRootBase = ({ children, isNumeric = false, className = '' }: TableCellRootBaseProps) => {
  return <TableCell
    component={'div'}
    className={`virtualized-table__cell virtualized-table__flex-container ${className}`}
    variant={'body'}
    align={isNumeric ? 'right' : 'left'}
  >{children}</TableCell>;
};
export default memo(TableCellRootBase);
