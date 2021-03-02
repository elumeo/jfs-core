import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/IconButton';
import * as Action from 'Store/Action';
import * as Global from 'Store/Reducer/Global';

export type ISettingsButtonProps = Partial<typeof Action> & {
  settingsOpen?: boolean;
};

const SettingsButton: React.FC<ISettingsButtonProps> = ({
  settingsOpen,
  openSettings,
  closeSettings
}) => (
  <Button
    onClick={() => settingsOpen ? closeSettings() : openSettings()}>
    settings
  </Button>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: ISettingsButtonProps
): ISettingsButtonProps => ({
  ...ownProps,
  settingsOpen: state.Core.Settings.settingsOpen
});

const enhance = connect(mapStateToProps, Action);

export default enhance(SettingsButton);
