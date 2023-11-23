import React from 'react';
import MUIDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import { DialogContentProps } from '@mui/material/DialogContent/DialogContent';
import { useDispatch } from 'react-redux';
import { closeSettings } from 'Store/Action';
import ThemePickerMenu from 'Component/Theme/ThemePicker.menu';
import ClippyMenu from 'Component/Clippy/Clippy.menu';

type Props = {
  children: DialogContentProps['children'];
}

const Dialog = ({ children }: Props) => {
  const dispatch = useDispatch()
  const { formatMessage } = useIntl();
  const open = useSelector(state => state.Core.Settings.settingsOpen);
  const onClose = React.useCallback(() => dispatch(closeSettings()), [dispatch]);
  return (
    <MUIDialog open={open} onClose={onClose}>
      <DialogTitle>{formatMessage({ id: 'app.settings' })}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogContent><ThemePickerMenu /></DialogContent>
      <DialogContent><ClippyMenu /></DialogContent>
      <DialogActions>
        <Button variant='outlined' onClick={onClose}>
          {formatMessage({ id: 'app.closeBtnLabelModalDialog' })}
        </Button>
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
