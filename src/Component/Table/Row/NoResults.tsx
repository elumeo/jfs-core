import React from 'react';
import { Typography } from '@mui/material';
import { useIntl } from 'react-intl';

const NoResults: React.FC = () => {
  const { formatMessage } = useIntl();
  return <caption>
    <Typography variant={'body1'} textAlign={'center'}>{formatMessage({ id: 'table.noResults' })}</Typography>
  </caption>;
};

export default NoResults;
