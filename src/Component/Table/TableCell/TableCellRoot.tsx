import React, { memo, useMemo } from 'react';
import { TableCell } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';
import { flexContainerStyles } from 'Component/Table/VirtualizedTable';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type TableCellRootProps = {
  children: React.ReactNode,
  isNumeric?: boolean;
  rowHeight?: number | string;
};

const TableCellRoot = ({ children, isNumeric = false, rowHeight = '100px' }: TableCellRootProps) => {
  const theme = useTheme<Theme>();
  const styles = useMemo<CSSProperties>(() => ({
    ...flexContainerStyles,
    height: rowHeight, flex: 1, padding: theme.spacing(1), maxWidth: '100%'
  }), [rowHeight]);
  return <TableCell component='div' style={styles} variant='body' align={isNumeric ? 'right' : 'left'}>{children}</TableCell>;
};
export default memo(TableCellRoot);
