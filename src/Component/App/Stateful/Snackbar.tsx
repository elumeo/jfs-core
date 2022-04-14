import React, { memo } from 'react';
import * as Notification from 'Component/Notification';
import { SnackbarOrigin, SnackbarProvider } from 'notistack';
import { useSelector } from 'Types/Redux';
import { State } from 'Store/Reducer/Global';
import { makeStyles } from '@material-ui/core/styles';

const anchorOriginTopRight: SnackbarOrigin = { vertical: 'top', horizontal: 'right' }
const anchorOriginBottomRight: SnackbarOrigin = { vertical: 'bottom', horizontal: 'right' }

const selectNotificationPosition = (state: State) => state.Core.Configuration.config.NotificationPosition
const selectNotificationMax = (state: State) => state.Core.Configuration.config.NotificationMax

const useStyles = makeStyles(theme => ({
  root: {
    background: 'none',
    padding: 0,
    '& #notistack-snackbar': {
      width: '100%',
      height: '100%',
      padding: 0
    }
  },
  containerAnchorOriginTopRight: {
    marginTop: theme.mixins.toolbar.minHeight
  }
}))

const Snackbar = ({ children }: { children: React.ReactNode }) => {
  const notificationPosition = useSelector(selectNotificationPosition)
  const notificationMax = useSelector(selectNotificationMax)
  const anchorOrigin = notificationPosition == 'topRight' && anchorOriginTopRight || anchorOriginBottomRight
  const classes = useStyles()
  return (
    <SnackbarProvider
      className={classes.root}
      anchorOrigin={anchorOrigin}
      maxSnack={notificationMax}
      classes={{ containerAnchorOriginTopRight: classes.containerAnchorOriginTopRight }}
      domRoot={document.getElementById('overlay')}
    >
      <Notification.Notistack/>
      {children}
    </SnackbarProvider>
  )
};

export default memo(Snackbar);
