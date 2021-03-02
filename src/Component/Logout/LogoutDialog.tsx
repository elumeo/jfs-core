import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';
import { useIntl } from 'react-intl';
import  Typography  from '@material-ui/core/Typography';

const LogoutDialog: React.FC = ({
  children
}) => {
  const { logout, closeLogout } = useActions();
  const {formatMessage} = useIntl()
  const { logoutOpen, logoutPending } = useSelector<{
    logoutOpen: boolean;
    logoutPending: boolean;
  }>(state => ({
    logoutOpen: state.Core.Logout.logoutOpen,
    logoutPending: state.Core.Logout.logoutPending
  }));

  return (
        <Dialog
          id="logout"
          open={logoutOpen}
          title={formatMessage({id: 'app.logout.title'})}
          onClose={() => closeLogout()}
          aria-labelledby="logoutDescription"
        >
          <DialogContent >
          <Typography id="logoutDescription" className="md-color--secondary-text">
            {
              children
                ? children
                : formatMessage({id: 'app.logout.message'})
            }
          </Typography>
          </DialogContent>
          <DialogActions>

          <Button
              disabled={logoutPending}
              onClick={() => logout({})}>
              {
                logoutPending
                  ? <CircularProgress id="logout-progress"/>
                  : formatMessage({id: 'app.logout.action'})
              }
            </Button>,
            <Button
              onClick={() => closeLogout()}>
              {formatMessage({id: 'app.cancel.action'})}
            </Button>
          </DialogActions>
        </Dialog>

  );
}

export default LogoutDialog;
