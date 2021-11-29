import React, { memo, ReactNode, useCallback, useMemo } from 'react';
import { TableCellRoot, TableCellLoadingContent } from 'Component/Table/TableCell';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';
import { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';

export enum ContentEllipseMode {
  None = 'none',
  Normal = 'normal',
  Lines = 'lines'
}

export type TableCellDefaultProps = Partial<TableCellRootProps> & {
  cellData: ReactNode;
  isLoading?: boolean;
  contentEllipseMode?: ContentEllipseMode;
  contentEllipseLines?: number;
};

const TableCellDefault = ({ cellData, contentEllipseMode = ContentEllipseMode.Lines, contentEllipseLines = 4, isLoading = false, ...rest }: TableCellDefaultProps) => {
  const ellipsesLinesStyle = useMemo<CSSProperties>(() => ({
    overflow: 'hidden',
    whiteSpace: 'normal',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: contentEllipseLines,
    display: '-webkit-box',
  }), [contentEllipseLines]);

  const getStyles = useCallback<() => CSSProperties>(() => {
    switch (contentEllipseMode) {
      case ContentEllipseMode.Lines:
        return ellipsesLinesStyle;
      case ContentEllipseMode.Normal:
        return ellipsesStyle;
      case ContentEllipseMode.None:
      default:
        return null;
    }
  }, []);
  return <TableCellRoot {...rest}>
    {isLoading === false && <span style={getStyles()}>{cellData}</span>}
    {isLoading && <TableCellLoadingContent />}
  </TableCellRoot>;
};
export default memo(TableCellDefault);
