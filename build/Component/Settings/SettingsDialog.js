import React from 'react';
import { connect } from 'react-redux';
import International from '../International';
import ModalDialog from '../Modal/ModalDialog';
import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';
const SettingsDialog = ({ closeSettings: _closeSettings, settingsOpen, children }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(ModalDialog, { title: formatMessage({ id: 'app.settings' }), className: 'settings-dialog', visible: settingsOpen, closeDialog: () => _closeSettings() }, children))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { settingsOpen: state.Core.Settings.settingsOpen }));
const enhance = connect(mapStateToProps, { closeSettings });
export default enhance(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map