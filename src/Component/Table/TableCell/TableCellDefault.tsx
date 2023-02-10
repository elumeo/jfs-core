import React from 'react';
import { TableCellRoot, TableCellLoadingContent } from 'Component/Table/TableCell';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';
import { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';
import { SxProps, Box } from '@mui/material';
export enum ContentEllipseMode {
  None = 'none',
  Normal = 'normal',
  Lines = 'lines'
}

export type TableCellDefaultProps = Partial<TableCellRootProps> & {
  cellData: React.ReactNode;
  isLoading?: boolean;
  contentEllipseMode?: ContentEllipseMode;
  contentEllipseLines?: number;
  overflow?: 'hidden' | 'visible'
};

const TableCellDefault: React.FC<TableCellDefaultProps> = ({ cellData,
  overflow = 'hidden',
  contentEllipseMode = ContentEllipseMode.Lines,
  contentEllipseLines = 4,
  isLoading = false,
  ...rest }) => {
  const ellipsesLinesStyle = React.useMemo<SxProps>(
    () => ({
      overflow,
      whiteSpace: 'normal',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: contentEllipseLines,
      display: '-webkit-box',
    }),
    [contentEllipseLines]
  );

  const styles = React.useMemo<SxProps>(() => {
    switch (contentEllipseMode) {
      case ContentEllipseMode.Lines:
        return ellipsesLinesStyle;
      case ContentEllipseMode.Normal:
        return ellipsesStyle;
      case ContentEllipseMode.None:
      default:
        return null;
    }
  }, [ellipsesLinesStyle]);
  return <TableCellRoot {...rest}>
    {isLoading === false && <Box sx={styles}>{cellData}</Box>}
    {isLoading && <TableCellLoadingContent />}
  </TableCellRoot>;
};
export default TableCellDefault
