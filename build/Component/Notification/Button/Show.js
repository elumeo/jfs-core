import React from 'react';
import { createPortal } from 'react-dom';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import NotificationOverlay from '../../Notification/Overlay';
import { useSnackbar } from 'notistack';
import { useSelector } from '../../../Types/Redux';
const ShowButton = ({ keepOpenOnOutsideClick }) => {
    const [anchorRef, setAnchorRef] = React.useState(null);
    const buttonRef = React.useRef();
    const open = Boolean(anchorRef);
    const id = open ? 'notification-popper' : undefined;
    const all = useSelector(state => state.Core.Notification.history);
    const snackbar = useSnackbar();
    React.useEffect(() => {
        if (open) {
            all.forEach(({ id }) => snackbar.closeSnackbar(id));
        }
    }, [open]);
    return (React.createElement(React.Fragment, null,
        React.createElement(MUI.IconButton, { color: 'inherit', ref: buttonRef, "aria-describedby": id, onClick: () => setAnchorRef(open
                ? null
                : buttonRef.current) },
            React.createElement(MUI.Badge, { badgeContent: all.length, color: 'secondary' },
                React.createElement(ICON.Notifications, null))),
        createPortal(keepOpenOnOutsideClick
            ? (React.createElement(MUI.Popper, { open: open, placement: 'bottom-end', id: id, anchorEl: anchorRef, modifiers: {
                    flip: {
                        enabled: true,
                    },
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: 'scrollParent',
                    },
                    arrow: {
                        enabled: true,
                        element: anchorRef,
                    },
                } },
                React.createElement(NotificationOverlay, null)))
            : (React.createElement(MUI.Popover, { open: open, anchorEl: anchorRef, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                }, onClose: () => setAnchorRef(null) },
                React.createElement(NotificationOverlay, null))), document.getElementById('overlay'))));
};
export default ShowButton;
//# sourceMappingURL=Show.js.map