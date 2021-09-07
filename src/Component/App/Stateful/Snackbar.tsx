import React, { memo } from 'react';
import * as Notification from 'Component/Notification';
import { SnackbarProvider, VariantClassKey } from 'notistack';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles<VariantClassKey, {}>({
  variantSuccess: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.getContrastText(theme.palette.success.main),
  },
  variantError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
  },
  variantWarning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.getContrastText(theme.palette.warning.main),
  },
  variantInfo: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.getContrastText(theme.palette.info.main),
  }
}));

const Snackbar: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const classes = useStyles();
  return (
    <SnackbarProvider
      classes={classes}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      maxSnack={5}
      domRoot={document.getElementById('overlay')}>
      <Notification.Notistack />
      {children}
    </SnackbarProvider>
  )
};

export default memo(Snackbar);
