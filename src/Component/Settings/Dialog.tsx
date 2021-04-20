import React from 'react';
import MUIDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';

const Dialog: React.FC = ({ children }) => {
  const { closeSettings } = useActions();
  const { formatMessage } = useIntl();
  const open = useSelector(state => state.Core.Settings.settingsOpen);
  return (
    <MUIDialog
      open={open}
      onClose={closeSettings}>
      <DialogTitle>
        {formatMessage({id: 'app.settings'})}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='secondary'
          onClick={closeSettings}>
          {formatMessage({id: 'app.closeBtnLabelModalDialog'})}
        </Button>
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
