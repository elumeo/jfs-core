import React, { memo } from 'react';
import { CircularProgress } from '@material-ui/core';

export type TableRowLoadingBaseProps = {
  className?: string;
}

const TableRowLoadingBase = ({ className }: TableRowLoadingBaseProps) => {
  return (
    <div className={className}>
      <CircularProgress />
    </div>
  );
};

export default memo(TableRowLoadingBase);
