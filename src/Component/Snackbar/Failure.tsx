import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useIntl } from 'react-intl';

export type Props = {
  title?: string;
  details: string;
};

const Failure: React.FC<Props> = ({ title, details }) => {
  const intl = useIntl();
  return (
    <Stack>
      <Typography component={'u'}>{intl.formatMessage({ id: 'app.error' })}:</Typography>
      {details}
      {title && <Typography sx={{ fontSize: 'x-small' }}>{title}</Typography>}
    </Stack>
  );
};

export default Failure;
