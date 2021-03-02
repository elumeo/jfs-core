import React from 'react';
import { connect } from 'react-redux';
import { closeSettings } from '../../Store/Action/SettingsAction';
import './SettingsDialog.scss';
import { Dialog, DialogActions, DialogTitle, Button } from '@material-ui/core';
import { useIntl } from 'react-intl';
const SettingsDialog = ({ closeSettings, settingsOpen, children }) => {
    const { formatMessage } = useIntl();
    return React.createElement(Dialog, { className: 'settings-dialog', open: settingsOpen, fullWidth: true, onClose: closeSettings },
        React.createElement(DialogTitle, null, formatMessage({ id: 'app.settings' })),
        children,
        React.createElement(DialogActions, null,
            React.createElement(Button, { variant: 'contained', color: 'secondary', onClick: closeSettings }, formatMessage({ id: 'app.closeBtnLabelModalDialog' }))));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { settingsOpen: state.Core.Settings.settingsOpen }));
const enhance = connect(mapStateToProps, { closeSettings });
export default enhance(SettingsDialog);
//# sourceMappingURL=SettingsDialog.js.map