import React, { memo, ReactNode } from 'react';
import { TableCellRoot, TableCellLoadingContent } from 'Component/Table/TableCell';

export enum ContentEllipseMode {
  None = 'none',
  Normal = 'normal',
  Lines = 'lines'
}

export type TableCellDefaultBaseProps = {
  cellData: ReactNode;
  isLoading?: boolean;
  isNumeric?: boolean;
  contentEllipseMode?: ContentEllipseMode;
  contentEllipseLines?: number;
  className?: string;
};

const TableCellDefaultBase = ({ cellData, isNumeric = false, className = '', contentEllipseMode = ContentEllipseMode.Lines, isLoading = false }: TableCellDefaultBaseProps) => {
  const getClassName = () => {
    switch (contentEllipseMode) {
      case ContentEllipseMode.Lines:
        return 'virtualized-table__content-ellipses-lines';
      case ContentEllipseMode.Normal:
        return 'virtualized-table__content-ellipses';
      case ContentEllipseMode.None:
      default:
        return '';
    }
  };
  return <TableCellRoot isNumeric={isNumeric} className={className}>
    {isLoading === false && <span className={getClassName()}>{cellData}</span>}
    {isLoading && <TableCellLoadingContent />}
  </TableCellRoot>;
};
export default memo(TableCellDefaultBase);
