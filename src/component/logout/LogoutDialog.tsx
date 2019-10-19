import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import Dialog from 'react-md/lib/Dialogs';
import IRootReducer from '../../store/reducer/RootReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logoutAction } from '../../store/action/SessionAction';
import { closeLogout } from '../../store/action/LogoutAction';

export interface ILogoutDialogProps extends InjectedIntlProps {
  openLogout?: () => void;
  closeLogout?: () => void;
  logoutAction?: () => void;
  logoutOpen?: boolean;
}

export interface ILogoutDialogState {

}

class LogoutDialog extends React.Component<ILogoutDialogProps, ILogoutDialogState> {
  render() {
    const {
      props: {
        intl: { formatMessage },
        logoutOpen, closeLogout, logoutAction
      }
    } = this;

    return (
      <Dialog
        id="logout"
        visible={logoutOpen}
        title={formatMessage({ id: 'app.logout.title' })}
        onHide={() => closeLogout()}
        aria-labelledby="logoutDescription"
        modal
        actions={[
          {
            onClick: () => {
              closeLogout();
              logoutAction();
            },
            primary: true,
            label: formatMessage({ id: 'app.logout.action' })
          },
          {
            onClick: () => closeLogout(),
            label: formatMessage({ id: 'app.cancel.action' })
          }
        ]}
      >
        <p id="logoutDescription" className="md-color--secondary-text">
          {formatMessage({ id: 'app.logout.message' })}
        </p>
      </Dialog>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: ILogoutDialogProps) => ({
  ...ownProps,
  logoutOpen: state.logoutReducer.logoutOpen
});

const enhance = compose(
  connect(mapStateToProps, { closeLogout, logoutAction }),
  injectIntl
);

export default enhance(LogoutDialog);

/*const LogoutDialog: React.FC<ILogoutDialog> = ({ closeDialog, intl, visible }) => {
  const { formatMessage } = intl;
  return (
    <Dialog
      id="logout"
      visible={visible}
      title={formatMessage({ id: 'app.logout.title' })}
      onHide={() => {
        closeDialog(false);
      }}
      aria-labelledby="logoutDescription"
      modal
      actions={[
        {
          onClick: () => {
            closeDialog(true);
          },
          primary: true,
          label: formatMessage({ id: 'app.logout.action' })
        },
        {
          onClick: () => {
            closeDialog(false);
          },
          label: formatMessage({ id: 'app.cancel.action' })
        }
      ]}
    >
      <p id="logoutDescription" className="md-color--secondary-text">
        {formatMessage({ id: 'app.logout.message' })}
      </p>
    </Dialog>
  );
};

export default injectIntl(LogoutDialog);*/
