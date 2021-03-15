import React from 'react';
import AppHeader from 'Component/Header/AppHeader';
import * as Notification from 'Component/Notification';
import BackendIndicator from 'Component/Header/BackendIndicator';
import useActions from 'Store/Action/useActions';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import uuid from 'uuid';
import { VariantType } from 'notistack';

export type Props = {};

export const X = () => {
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

const Header: React.FC<Props> = () => (
  <AppHeader
    leftTools={() => <BackendIndicator/>}
    middleTools={() => <X/>}
    rightTools={() => <Notification.Button.Show/>}/>
);

export default Header;
