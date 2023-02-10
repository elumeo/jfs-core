import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';
import Flag, { Country } from './Flag';
import { Box } from '@mui/material';

const BackendIndicator = () => {
  const { formatMessage } = useIntl();
  const backendRegion = useSelector(state => state.Core.System.backendRegion);
  return (<Box flexGrow={0}>
    <Tooltip
      title={`${formatMessage({ id: 'app.backend' })}: ${backendRegion}`}>
      <Box flexGrow={0}>
        <Flag country={(backendRegion || '').toLowerCase() as Country} />
      </Box>
    </Tooltip></Box>
  );
};

export default BackendIndicator
