import React from 'react';
import MUIDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/useActions';
const Dialog = ({ children }) => {
    const { closeSettings } = useActions();
    const { formatMessage } = useIntl();
    const open = useSelector(state => state.Core.Settings.settingsOpen);
    const onClose = React.useCallback(() => closeSettings(), [closeSettings]);
    return (React.createElement(MUIDialog, { open: open, onClose: onClose },
        React.createElement(DialogTitle, null, formatMessage({ id: 'app.settings' })),
        React.createElement(DialogContent, null, children),
        React.createElement(DialogActions, null,
            React.createElement(Button, { variant: 'outlined', onClick: onClose }, formatMessage({ id: 'app.closeBtnLabelModalDialog' })))));
};
export default Dialog;
