import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/useActions';
const Dialog = ({ children }) => {
    const { closeSettings } = useActions();
    const { formatMessage } = useIntl();
    const open = useSelector(state => state.Core.Settings.settingsOpen);
    return (React.createElement(MUI.Dialog, { className: 'settings-dialog', open: open, onClose: closeSettings },
        React.createElement(MUI.DialogTitle, null, formatMessage({ id: 'app.settings' })),
        React.createElement(MUI.DialogContent, null, children),
        React.createElement(MUI.DialogActions, null,
            React.createElement(MUI.Button, { variant: 'contained', color: 'secondary', onClick: closeSettings }, formatMessage({ id: 'app.closeBtnLabelModalDialog' })))));
};
export default Dialog;
