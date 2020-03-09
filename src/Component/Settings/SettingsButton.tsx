import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons/Button';

import { closeSettings, openSettings } from '../../Store/Action/SettingsAction';
import { ICoreRootReducer } from '../../Store/Reducer';

export interface ISettingsButtonProps {
  settingsOpen?: boolean;
  openSettings?: typeof openSettings;
  closeSettings?: typeof closeSettings;
}

const SettingsButton: React.FC<ISettingsButtonProps> = ({
  settingsOpen,
  openSettings,
  closeSettings
}) => (
  <Button
    icon
    onClick={() => settingsOpen ? closeSettings() : openSettings()}>
    settings
  </Button>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ISettingsButtonProps
): ISettingsButtonProps => ({
  ...ownProps,
  settingsOpen: state.settingsReducer.settingsOpen
});

const enhance = connect(mapStateToProps, {openSettings, closeSettings});

export default enhance(SettingsButton);
