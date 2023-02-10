import React from 'react';
import { useIntl } from 'react-intl';
import InputLabel from '@mui/material/InputLabel';
import Select from './Select';
import useLanguage from './useLanguage';
import { Box } from '@mui/material';

const Settings: React.FC = () => {
  const language = useLanguage();
  const { formatMessage } = useIntl();
  return (
    <Box
      sx={{
        width: 240,
      }}>
      <InputLabel>{formatMessage({ id: 'settings.language' })}</InputLabel>
      <Select value={language.value} onChange={language.onChange} />
    </Box>
  );
};

export default Settings;
