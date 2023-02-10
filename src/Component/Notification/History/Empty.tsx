import React from 'react';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useIntl } from 'react-intl';
import { Box } from '@mui/material';

const Empty: React.FC = () => {
  const { formatMessage } = useIntl();
  const iconRef = React.useRef();
  return (
    <Box
      sx={{
        width: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'grey',
      }}>
      <NotificationsIcon fontSize='large' ref={iconRef} />
      <Typography>{formatMessage({ id: 'app.noNotifications' })}</Typography>
    </Box>
  );
};

export default Empty;
