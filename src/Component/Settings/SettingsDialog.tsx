import React from 'react';
import { connect } from 'react-redux';

import International from '../International';
import ModalDialog from '../Modal/ModalDialog';
import { ICoreRootReducer } from '../../Store/Reducer';
import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';

export interface ISettingsDialogProps {
  closeSettings?: typeof closeSettings;
  settingsOpen?: boolean;
}

const SettingsDialog: React.FC<ISettingsDialogProps> = ({
  closeSettings,
  settingsOpen,
  children
}) => (
  <International>
    {({ formatMessage }) => (
      <ModalDialog
        title={formatMessage({id: 'app.settings'})}
        className="settings-dialog"
        visible={settingsOpen}
        closeDialog={() => closeSettings()}>
        {children}
      </ModalDialog>
    )}
  </International>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ISettingsDialogProps
): ISettingsDialogProps => ({
  ...ownProps,
  settingsOpen: state.settingsReducer.settingsOpen
});

const enhance = connect(mapStateToProps, {closeSettings});

export default enhance(SettingsDialog);
