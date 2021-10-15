import React, { memo, ReactNode } from 'react';
import { StyledTableCellBase, TableCellLoadingContent } from 'Component/Table/TableCell';

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
  className?: string;
};

const TableCellDefault = ({ cellData, isNumeric = false, className = '', contentEllipseMode = ContentEllipseMode.Lines, isLoading = false }: TableCellDefaultProps) => {
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
  return <StyledTableCellBase isNumeric={isNumeric} className={className}>
    {isLoading === false && <span className={getClassName()}>{cellData}</span>}
    {isLoading && <TableCellLoadingContent />}
  </StyledTableCellBase>;
};
export default memo(TableCellDefault);
