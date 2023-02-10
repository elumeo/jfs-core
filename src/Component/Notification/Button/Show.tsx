import React from 'react';
import { createPortal } from 'react-dom';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Popper from '@mui/material/Popper';
import Popover from '@mui/material/Popover';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationOverlay from 'Component/Notification/Overlay';
import { useSnackbar } from 'notistack';
import { useSelector } from 'Types/Redux';

export type Props = {
  keepOpenOnOutsideClick?: boolean;
};
const ShowButton: React.FC<Props> = ({ keepOpenOnOutsideClick }) => {
  const [anchorRef, setAnchorRef] = React.useState<HTMLElement>(null);
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

  return (
    <>
      <IconButton
        color='inherit'
        ref={buttonRef}
        aria-describedby={id}
        onClick={() => setAnchorRef(open ? null : buttonRef.current)}>
        <Badge badgeContent={all.length} color='secondary' >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      {createPortal(
        keepOpenOnOutsideClick ? (
          <Popper
            open={open}
            placement='bottom-end'
            id={id}
            anchorEl={anchorRef}
            modifiers={[
              {
                name: 'flip',
                enabled: true
              },
              {
                name: 'preventOverflow',
                enabled: true,
                options: { boundariesElement: 'scrollParent' },
              },
              {
                name: 'arrow',
                enabled: true,
                options: { element: anchorRef },
              }
            ]} onResize={undefined} onResizeCapture={undefined}>
            <NotificationOverlay />
          </Popper>
        ) : (
          <Popover
            open={open}
            anchorEl={anchorRef}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            onClose={() => setAnchorRef(null)}>
            <NotificationOverlay />
          </Popover>
        ),
        document.getElementById('overlay'),
      )}
    </>
  );
};

export default ShowButton;
