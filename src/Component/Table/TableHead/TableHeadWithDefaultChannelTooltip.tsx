import React from 'react';
import TableHeadDefault, { TableHeadDefaultProps } from 'Component/Table/TableHead/TableHeadDefault';
import DefaultChannelTooltip from 'Component/DefaultChannelTooltip';

const TableHeadWithDefaultChannelTooltip: React.FC<TableHeadDefaultProps> = ({label, ...rest}) => {
  return <TableHeadDefault {...rest} label={<>
    {label}
    <DefaultChannelTooltip />
  </>} />;
};

export default TableHeadWithDefaultChannelTooltip;
