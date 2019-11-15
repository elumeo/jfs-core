import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import Dialog from 'react-md/lib/Dialogs';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../store/action/SessionAction';
import { closeLogout } from '../../store/action/LogoutAction';

export interface ILogoutDialogProps extends InjectedIntlProps {
  openLogout?: () => void;
  closeLogout?: typeof closeLogout;
  logout?: typeof logout;
  logoutOpen?: boolean;
}

export interface ILogoutDialogState {

}

class LogoutDialog extends React.Component<ILogoutDialogProps, ILogoutDialogState> {
  render() {
    const {
      props: {
        intl: {formatMessage},
        logoutOpen, closeLogout, logout
      }
    } = this;

    return (
      <Dialog
        id="logout"
        visible={logoutOpen}
        title={formatMessage({id: 'app.logout.title'})}
        onHide={() => closeLogout()}
        aria-labelledby="logoutDescription"
        modal
        actions={[
          {
            onClick: () => {
              closeLogout();
              logout({});
            },
            primary: true,
            label: formatMessage({id: 'app.logout.action'})
          },
          {
            onClick: () => closeLogout(),
            label: formatMessage({id: 'app.cancel.action'})
          }
        ]}
      >
        <p id="logoutDescription" className="md-color--secondary-text">
          {formatMessage({id: 'app.logout.message'})}
        </p>
      </Dialog>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILogoutDialogProps
): ILogoutDialogProps => ({
  ...ownProps,
  logoutOpen: state.logoutReducer.logoutOpen
});

const enhance = compose(
  connect(mapStateToProps, {closeLogout, logout}),
  injectIntl
);

export default enhance(LogoutDialog);
