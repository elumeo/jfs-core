import React from 'react';
import { connect } from 'react-redux';

import International from '../International';
import ModalDialog from '../Modal/ModalDialog';
import Global from '../../Store/Reducer/Global';
import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';

export interface ISettingsDialogProps {
  closeSettings?: typeof closeSettings;
  settingsOpen?: boolean;
}

const SettingsDialog: React.FC<ISettingsDialogProps> = ({
  closeSettings: _closeSettings,
  settingsOpen,
  children
}) => (
  <International>
    {({ formatMessage }) => (
      <ModalDialog
        title={formatMessage({id: 'app.settings'})}
        className='settings-dialog'
        visible={settingsOpen}
        closeDialog={() => _closeSettings()}>
        {children}
      </ModalDialog>
    )}
  </International>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: ISettingsDialogProps
): ISettingsDialogProps => ({
  ...ownProps,
  settingsOpen: state.Core.Settings.settingsOpen
});

const enhance = connect(mapStateToProps, {closeSettings});

export default enhance(SettingsDialog);
