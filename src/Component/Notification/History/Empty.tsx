import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';

const Empty: React.FC = () => {
  const { formatMessage } = useIntl();
  const iconRef = React.useRef();
  return (
    <MUI.Box
      component='div'
      style={{
        width: 'max-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'grey'
      }}>
      <MUI.Icon fontSize='large' ref={iconRef}>
        notifications
      </MUI.Icon>
      <MUI.Typography>
        {formatMessage({ id: 'app.noNotifications' })}
      </MUI.Typography>
    </MUI.Box>
  );
};

export default Empty;
