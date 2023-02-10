import { Box } from '@mui/material';
import React from 'react';
import { useIntl } from 'react-intl';

const styles = {
  textAlign: 'center',
  mt: 2
}
const TableRowNoResults: React.FC = () => {
  const { formatMessage } = useIntl();
  return <Box sx={styles}>{formatMessage({ id: 'table.noResults' })}</Box>;
};

export default TableRowNoResults
