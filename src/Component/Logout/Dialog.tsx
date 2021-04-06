import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import useLogout from './useLogout';

const Dialog: React.FC = ({ children }) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  return (
    <MUI.Dialog
      id="logout"
      open={logout.open}
      title={formatMessage({id: 'app.logout.title'})}
      onClose={logout.close}
      aria-labelledby="logout-description">
      <MUI.DialogContent>
        <MUI.Typography
          id="logout-description">
          {children
            ? children
            : formatMessage({id: 'app.logout.message'})}
        </MUI.Typography>
      </MUI.DialogContent>
      <MUI.DialogActions>
        <MUI.Button
          disabled={logout.pending}
          onClick={() => logout.commit({})}>
          {logout.pending
            ? <MUI.CircularProgress id="logout-progress"/>
            : formatMessage({id: 'app.logout.action'})}
        </MUI.Button>
        <MUI.Button
          onClick={logout.close}>
          {formatMessage({id: 'app.cancel.action'})}
        </MUI.Button>
      </MUI.DialogActions>
    </MUI.Dialog>
  );
};

export default Dialog;
