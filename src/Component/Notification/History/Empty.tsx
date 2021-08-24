import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useIntl } from 'react-intl';

const Empty: React.FC = () => {
  const { formatMessage } = useIntl();
  const iconRef = React.useRef();
  return (
    <Box
      component='div'
      style={{
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
