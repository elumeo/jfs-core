import React, {FC} from 'react';
import {Box, BoxProps} from '@mui/material';
import { useIntl } from 'react-intl';

const styles = {
  textAlign: 'center',
  mt: 2
}
const NoResults: FC<BoxProps> = ({...rest}) => {
  const { formatMessage } = useIntl();
  return <Box sx={styles} {...rest}>{formatMessage({ id: 'table.noResults' })}</Box>;
};

export default NoResults;
