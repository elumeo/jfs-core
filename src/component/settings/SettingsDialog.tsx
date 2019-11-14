import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ModalDialog from '../../component/modal/ModalDialog';

import IRootReducer from '../../store/reducer/RootReducer';
import { closeDialog } from '../../store/action/SettingsAction';

import './SettingsDialog.scss';

export interface ISettingsDialogProps extends InjectedIntlProps {
  closeDialog?: typeof closeDialog;
  settingsOpened?: boolean;
}

export interface ISettingsDialogState {

}

class SettingsDialog extends React.Component<ISettingsDialogProps, ISettingsDialogState> {
  render() {
    const {
      props: { intl: { formatMessage }, closeDialog, settingsOpened, children }
    } = this;
    return (
      <ModalDialog
        title={formatMessage({ id: 'app.settings' })}
        className="settings-dialog"
        visible={settingsOpened}
        closeDialog={() => closeDialog()}
      >
        {children}
      </ModalDialog>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: ISettingsDialogProps) => ({
  ...ownProps,
  settingsOpened: state.settingsReducer.open
});

const enhance = compose(
  connect(mapStateToProps, { closeDialog }),
  injectIntl
);

export default enhance(SettingsDialog);
