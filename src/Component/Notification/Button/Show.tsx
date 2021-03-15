import React from 'react';
import { createPortal } from 'react-dom';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
import NotificationOverlay from 'Component/Notification/Overlay';
import useActions from 'Store/Action/useActions';
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

  return (<>
    
      <MUI.IconButton
        color='inherit'
        ref={buttonRef}
        aria-describedby={id}
        onClick={() => setAnchorRef(
          open
            ? null
            : buttonRef.current
        )}><MUI.Badge badgeContent={all.length} color='secondary'>
        <ICON.Notifications/>
    </MUI.Badge>
      </MUI.IconButton>

      {createPortal(
        keepOpenOnOutsideClick
          ? (
            <MUI.Popper
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
            </MUI.Popper>
          )
          : (
            <MUI.Popover
              open={open}
              anchorEl={anchorRef}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              onClose={() => setAnchorRef(null)}>
              <NotificationOverlay/>
            </MUI.Popover>
          ),
        document.getElementById('overlay')
      )}
    </>
  );
};

export default ShowButton;
