import React from 'react';
import { createPortal } from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
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
        React.createElement(IconButton, { color: 'inherit', ref: buttonRef, "aria-describedby": id, onClick: () => setAnchorRef(open ? null : buttonRef.current) },
            React.createElement(Badge, { badgeContent: all.length, color: 'secondary' },
                React.createElement(NotificationsIcon, null))),
        createPortal(keepOpenOnOutsideClick ? (React.createElement(Popper, { open: open, placement: 'bottom-end', id: id, anchorEl: anchorRef, modifiers: {
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
            React.createElement(NotificationOverlay, null))) : (React.createElement(Popover, { open: open, anchorEl: anchorRef, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            }, onClose: () => setAnchorRef(null) },
            React.createElement(NotificationOverlay, null))), document.getElementById('overlay'))));
};
export default ShowButton;
