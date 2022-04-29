import React from 'react';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useIntl } from 'react-intl';

const Empty: React.FC = () => {
  const { formatMessage } = useIntl();
  const iconRef = React.useRef();
  return (
    <div
      style={{
        width: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'grey',
      }}>
      <NotificationsIcon fontSize='large' ref={iconRef}/>
      <Typography>{formatMessage({ id: 'app.noNotifications' })}</Typography>
    </div>
  );
};

export default Empty;
