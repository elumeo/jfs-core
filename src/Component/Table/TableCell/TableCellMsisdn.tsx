import React from 'react';
import FormattedMsisdn from 'Component/FormattedMsisdn';
import TableCellLoading from 'Component/Table/TableCell/TableCellLoadingContent';
import TableCellRoot, { TableCellRootProps } from 'Component/Table/TableCell/TableCellRoot';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';
import { Box } from '@mui/material';

export type TableCellMsisdnProps = Partial<TableCellRootProps> & {
  cellData: string;
  isLoading?: boolean;
};

const TableCellMsisdn: React.FC<TableCellMsisdnProps> = ({ cellData, isLoading = false, ...rest }) => {
  return <TableCellRoot {...rest} isNumeric={false}>
    {
      isLoading
        ? <TableCellLoading />
        : cellData
          ? <Box sx={ellipsesStyle}><FormattedMsisdn msisdn={cellData} /></Box>
          : '-'
    }
  </TableCellRoot>
};

export default TableCellMsisdn
