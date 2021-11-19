import React, { memo } from 'react';
import * as Notification from 'Component/Notification';
import { SnackbarProvider } from 'notistack';

const Snackbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <SnackbarProvider
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
