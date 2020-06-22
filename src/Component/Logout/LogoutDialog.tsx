import React from 'react';
import Dialog from 'react-md/lib/Dialogs';

import Global from '../../Store/Reducer/Global';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../Store/Action/SessionAction';
import { closeLogout } from '../../Store/Action/LogoutAction';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import International from '../International';

export interface ILogoutDialogProps {
  openLogout?: () => void;
  closeLogout?: typeof closeLogout;
  logout?: typeof logout;
  logoutOpen?: boolean;
  logoutPending?: boolean;
  beforeLogout?: () => void;
}

const LogoutDialog: React.FC<ILogoutDialogProps> = ({
  logoutOpen,
  closeLogout,
  logout,
  logoutPending,
  children
}) => (
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

const mapStateToProps = (
  state: Global.State,
  ownProps: ILogoutDialogProps
): ILogoutDialogProps => ({
  ...ownProps,
  logoutOpen: state.Core.Logout.logoutOpen,
  logoutPending: state.Core.Logout.logoutPending
});

const enhance = compose(
  connect(mapStateToProps, {closeLogout, logout})
);

export default enhance(LogoutDialog);
