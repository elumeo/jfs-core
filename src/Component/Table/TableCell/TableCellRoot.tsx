import React, { memo, useMemo } from 'react';
import { TableCell } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';
import { flexContainerStyles } from 'Component/Table/VirtualizedTable';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type TableCellRootProps = {
  children: React.ReactNode,
  isNumeric?: boolean;
  height?: number | string;
  styles?: CSSProperties;
};

const TableCellRoot = ({ children, isNumeric = false, height = '100px', styles = {} }: TableCellRootProps) => {
  const theme = useTheme<Theme>();
  const preparedStyles = useMemo<CSSProperties>(() => ({
    ...flexContainerStyles,
    height: height, flex: 1, padding: theme.spacing(1), maxWidth: '100%',
    ...styles,
  }), [height, styles]);
  return <TableCell component='div' style={preparedStyles} variant='body' align={isNumeric ? 'right' : 'left'}>{children}</TableCell>;
};
export default memo(TableCellRoot);
