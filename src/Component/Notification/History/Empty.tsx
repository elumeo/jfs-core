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
        flexDirection: 'column'
      }}
    >
      <MUI.Icon fontSize='large' ref={iconRef}>
        notifications
      </MUI.Icon>
      <MUI.Popper
        open={true}
        modifiers={{
          arrow: {
            enabled: false,
            element: iconRef
          }
        }}
      >
        <MUI.Typography>{formatMessage({ id: 'app.noNotifications' })}</MUI.Typography>
      </MUI.Popper>
    </MUI.Box>
  );
};

export default Empty;
