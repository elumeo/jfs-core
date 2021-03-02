import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/IconButton';
import { closeSettings, openSettings } from '../../Store/Action/SettingsAction';
const SettingsButton = ({ settingsOpen, openSettings, closeSettings }) => (React.createElement(Button, { onClick: () => settingsOpen ? closeSettings() : openSettings() }, "settings"));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { settingsOpen: state.Core.Settings.settingsOpen }));
const enhance = connect(mapStateToProps, { openSettings, closeSettings });
export default enhance(SettingsButton);
//# sourceMappingURL=SettingsButton.js.map