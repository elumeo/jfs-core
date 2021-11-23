import React, { memo, ReactNode, useCallback, useMemo } from 'react';
import { TableCellRoot, TableCellLoadingContent } from 'Component/Table/TableCell';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';

export enum ContentEllipseMode {
  None = 'none',
  Normal = 'normal',
  Lines = 'lines'
}

export type TableCellDefaultProps = {
  cellData: ReactNode;
  isLoading?: boolean;
  isNumeric?: boolean;
  contentEllipseMode?: ContentEllipseMode;
  contentEllipseLines?: number;
};

const TableCellDefault = ({ cellData, isNumeric = false, contentEllipseMode = ContentEllipseMode.Lines, contentEllipseLines = 4, isLoading = false }: TableCellDefaultProps) => {
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
  return <TableCellRoot isNumeric={isNumeric}>
    {isLoading === false && <span style={getStyles()}>{cellData}</span>}
    {isLoading && <TableCellLoadingContent />}
  </TableCellRoot>;
};
export default memo(TableCellDefault);
