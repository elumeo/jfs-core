import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ModalDialog from '../../component/modal/ModalDialog';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { closeSettings } from '../../store/action/SettingsAction';

import './SettingsDialog.scss';

export interface ISettingsDialogProps extends InjectedIntlProps {
  closeSettings?: typeof closeSettings;
  settingsOpen?: boolean;
}

export interface ISettingsDialogState {

}

class SettingsDialog extends React.Component<ISettingsDialogProps, ISettingsDialogState> {
  render() {
    const {
      props: {intl: {formatMessage}, closeSettings, settingsOpen, children}
    } = this;
    return (
      <ModalDialog
        title={formatMessage({id: 'app.settings'})}
        className="settings-dialog"
        visible={settingsOpen}
        closeDialog={() => closeSettings()}
      >
        {children}
      </ModalDialog>
    );
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ISettingsDialogProps
): ISettingsDialogProps => ({
  ...ownProps,
  settingsOpen: state.settingsReducer.settingsOpen
});

const enhance = compose(
  connect(mapStateToProps, {closeSettings}),
  injectIntl
);

export default enhance(SettingsDialog);
