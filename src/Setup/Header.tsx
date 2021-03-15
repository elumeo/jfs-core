import React from 'react';
import AppHeader from 'Component/Header/AppHeader';
import * as Notification from 'Component/Notification';
import BackendIndicator from 'Component/Header/BackendIndicator';
import useActions from 'Store/Action/useActions';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import uuid from 'uuid';

export type Props = {};

const X = () => {
  const { addNotification } = useActions();

  return (
    <MUI.IconButton onClick={() => {
      const id = uuid();
      addNotification({
        id,
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

const Header: React.FC<Props> = () => (
  <AppHeader
    leftTools={() => <BackendIndicator/>}
    middleTools={() => <X/>}
    rightTools={() => <Notification.Button.Show/>}/>
);

export default Header;
