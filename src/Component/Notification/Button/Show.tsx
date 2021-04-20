import React from 'react';
import { createPortal } from 'react-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Popper from '@material-ui/core/Popper';
import Popover from '@material-ui/core/Popover';
import NotificationsIcon from '@material-ui/icons/Notifications';
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

  React.useEffect(
    () => {
      if (open) {
        all.forEach(({ id }) => snackbar.closeSnackbar(id));
      }
    },
    [open]
  );

  return (
    <>
      <IconButton
        color='inherit'
        ref={buttonRef}
        aria-describedby={id}
        onClick={() => setAnchorRef(
          open
            ? null
            : buttonRef.current
        )}>
        <Badge badgeContent={all.length} color='secondary'>
          <NotificationsIcon/>
        </Badge>
      </IconButton>
      {createPortal(
        keepOpenOnOutsideClick
          ? (
            <Popper
              open={open}
              placement='bottom-end'
              id={id}
              anchorEl={anchorRef}
              modifiers={{
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
              }}>
              <NotificationOverlay/>
            </Popper>
          )
          : (
            <Popover
              open={open}
              anchorEl={anchorRef}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              onClose={() => setAnchorRef(null)}>
              <NotificationOverlay/>
            </Popover>
          ),
        document.getElementById('overlay')
      )}
    </>
  );
};

export default ShowButton;
