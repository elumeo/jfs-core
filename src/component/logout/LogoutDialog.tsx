import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import Dialog from 'react-md/lib/Dialogs';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../store/action/SessionAction';
import { closeLogout } from '../../store/action/LogoutAction';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

export interface ILogoutDialogProps extends InjectedIntlProps {
  openLogout?: () => void;
  closeLogout?: typeof closeLogout;
  logout?: typeof logout;
  logoutOpen?: boolean;
  logoutPending?: boolean;
  beforeLogout?: () => void;
}

const LogoutDialog: React.FC<ILogoutDialogProps> = ({
  intl: { formatMessage },
  logoutOpen, closeLogout, logout, children, logoutPending
}) => (
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
        onClick={() => logout({})}
      >
        {
          logoutPending
            ? <CircularProgress id="logout-progress"/>
            : formatMessage({id: 'app.logout.action'})
        }
      </Button>,
      <Button
        flat
        onClick={() => closeLogout()}
      >
        {formatMessage({id: 'app.cancel.action'})}
      </Button>
    ]}
  >
    <p id="logoutDescription" className="md-color--secondary-text">
      {
        children
          ? children
          : formatMessage({id: 'app.logout.message'})
      }
    </p>
  </Dialog>
)

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILogoutDialogProps
): ILogoutDialogProps => ({
  ...ownProps,
  logoutOpen: state.logoutReducer.logoutOpen,
  logoutPending: state.logoutReducer.logoutPending
});

const enhance = compose(
  connect(mapStateToProps, {closeLogout, logout}),
  injectIntl
);

export default enhance(LogoutDialog);
