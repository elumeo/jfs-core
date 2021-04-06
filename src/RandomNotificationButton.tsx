import React from 'react';
import * as Notification from 'Component/Notification';
import useActions from 'Store/useActions';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import uuid from 'uuid';

const RandomNotificationButton: React.FC = () => {
  const { addNotification } = useActions();
  // const variant = React.useMemo(() => getVal(),[getVal()])
  console.log('val color','warning' )
  return (
    <MUI.IconButton onClick={() => {
      const id = uuid();
      addNotification({
        id,
        title: 'test notification',
        variant: 'warning',
        content: id,
        action: snackbar => (
          <Notification.Button.Dismiss
            onClick={() => snackbar.closeSnackbar(id)}/>
        )
      })}
    }>
      <ICON.Send/>
    </MUI.IconButton>
  )
}

export default RandomNotificationButton;
