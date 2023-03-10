import React from 'react';
import FormattedMsisdn from 'Component/FormattedMsisdn';
import TableCellLoading from 'Component/Table/TableCell/Loading';
import Root from 'Component/Table/TableCell/Root';
import { ellipsesStyle } from 'Component/Table/VirtualizedTable';
import {Box, TableCellProps} from '@mui/material';

export type Props = Partial<TableCellProps> & {
  value: string;
  isLoading?: boolean;
};

const Msisdn: React.FC<Props> = ({ value, isLoading = false, ...rest }) => {
  return <Root {...rest}>
    {
      isLoading
        ? <TableCellLoading />
        : value
          ? <Box sx={ellipsesStyle}><FormattedMsisdn msisdn={value} /></Box>
          : '-'
    }
  </Root>
};

export default Msisdn;
