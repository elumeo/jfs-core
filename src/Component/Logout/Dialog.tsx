import React from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import useLogout from './useLogout';

const Dialog: React.FC = ({ children }) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  return (
    <MUIDialog
      open={logout.open}
      title={formatMessage({id: 'app.logout.title'})}
      onClose={logout.close}
      aria-labelledby="logout-description">
      <DialogContent>
        <Typography
          id="logout-description">
          {children
            ? children
            : formatMessage({id: 'app.logout.message'})}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={logout.pending}
          onClick={() => logout.commit({})}>
          {logout.pending
            ? <CircularProgress id="logout-progress"/>
            : formatMessage({id: 'app.logout.action'})}
        </Button>
        <Button
          onClick={logout.close}>
          {formatMessage({id: 'app.cancel.action'})}
        </Button>
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
