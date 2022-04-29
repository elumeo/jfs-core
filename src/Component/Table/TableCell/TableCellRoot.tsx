import React, { memo, useMemo } from 'react';
import { TableCell } from '@mui/material';
import theme from 'Component/App/Stateless/Style/Theme/Definition';
import { flexContainerStyles } from 'Component/Table/VirtualizedTable';
import { CSSProperties } from '@mui/styles/withStyles';

export type TableCellRootProps = {
  children: React.ReactNode,
  isNumeric?: boolean;
  height?: number | string;
  styles?: CSSProperties;
};

const TableCellRoot = ({ children, isNumeric = false, height = '100px', styles = {} }: TableCellRootProps) => {

  const preparedStyles = useMemo<CSSProperties>(() => ({
    ...flexContainerStyles,
    height: height, flex: 1, padding: theme.spacing(1), maxWidth: '100%',
    ...styles,
  }), [height, styles]);
  return <TableCell component='div' style={preparedStyles} variant='body' align={isNumeric ? 'right' : 'left'}>{children}</TableCell>;
};
export default memo(TableCellRoot);
