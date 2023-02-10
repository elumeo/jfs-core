import React from 'react';
import * as Notification from 'Component/Notification';
import { SnackbarOrigin, SnackbarProvider } from 'notistack';
import { useSelector } from 'Types/Redux';
import { State } from 'Store/Reducer/Global';
import definition from '../Stateless/Style/Theme/Definition';

const anchorOriginTopRight: SnackbarOrigin = { vertical: 'top', horizontal: 'right' }
const anchorOriginBottomRight: SnackbarOrigin = { vertical: 'bottom', horizontal: 'right' }

const selectNotificationPosition = (state: State) => state.Core.Configuration.config.NotificationPosition
const selectNotificationMax = (state: State) => state.Core.Configuration.config.NotificationMax

const classes = ({
  root: {
    background: 'none',
    padding: '0 0',
  },

})

const Snackbar = ({ children }: { children: React.ReactNode }) => {
  const notificationPosition = useSelector(selectNotificationPosition)
  const notificationMax = useSelector(selectNotificationMax)
  const anchorOrigin = notificationPosition == 'topRight' && anchorOriginTopRight || anchorOriginBottomRight
  return (
    <SnackbarProvider
      style={classes.root}
      anchorOrigin={anchorOrigin}
      maxSnack={notificationMax}
      classes={{ containerAnchorOriginTopRight: definition.mixins?.toolbar?.minHeight as string }}
      domRoot={document.getElementById('overlay')}
    >
      <Notification.Notistack />
      {children}
    </SnackbarProvider>
  )
};

export default Snackbar;
