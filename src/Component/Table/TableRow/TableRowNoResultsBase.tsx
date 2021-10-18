import React, { memo } from 'react';
import { useIntl } from 'react-intl';

export type TableRowNoResultsBaseProps = {
  className?: string;
}

const TableRowNoResultsBase = ({ className }: TableRowNoResultsBaseProps) => {
  const { formatMessage } = useIntl();
  return (
    <div className={className}>
      {formatMessage({ id: 'table.noResults' })}
    </div>
  );
};

export default memo(TableRowNoResultsBase);
