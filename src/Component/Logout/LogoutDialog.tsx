import React from 'react';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import International from 'Component/International';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';

const LogoutDialog: React.FC = ({
  children
}) => {
  const { logout, closeLogout } = useActions();
  const { logoutOpen, logoutPending } = useSelector<{
    logoutOpen: boolean;
    logoutPending: boolean;
  }>(state => ({
    logoutOpen: state.Core.Logout.logoutOpen,
    logoutPending: state.Core.Logout.logoutPending
  }));
  return (
    <International>
      {({ formatMessage }) => (
        <Dialog
          id="logout"
          visible={logoutOpen}
          title={formatMessage({id: 'app.logout.title'})}
          onHide={() => closeLogout()}
          aria-labelledby="logoutDescription"
          modal
          actions={[
            <Button
              flat
              primary
              disabled={logoutPending}
              onClick={() => logout({})}>
              {
                logoutPending
                  ? <CircularProgress id="logout-progress"/>
                  : formatMessage({id: 'app.logout.action'})
              }
            </Button>,
            <Button
              flat
              onClick={() => closeLogout()}>
              {formatMessage({id: 'app.cancel.action'})}
            </Button>
          ]}>
          <p id="logoutDescription" className="md-color--secondary-text">
            {
              children
                ? children
                : formatMessage({id: 'app.logout.message'})
            }
          </p>
        </Dialog>
      )}
    </International>
  );
}

export default LogoutDialog;
