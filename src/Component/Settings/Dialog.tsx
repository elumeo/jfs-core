import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';

const Dialog: React.FC = ({ children }) => {
  const { closeSettings } = useActions();
  const { formatMessage } = useIntl();
  const open = useSelector(state => state.Core.Settings.settingsOpen);
  return (
    <MUI.Dialog
      className='settings-dialog'
      open={open}
      onClose={closeSettings}>
      <MUI.DialogTitle>
        {formatMessage({id: 'app.settings'})}
      </MUI.DialogTitle>
      <MUI.DialogContent>
        {children}
      </MUI.DialogContent>
      <MUI.DialogActions>
        <MUI.Button
          variant='contained'
          color='secondary'
          onClick={closeSettings}>
          {formatMessage({id: 'app.closeBtnLabelModalDialog'})}
        </MUI.Button>
      </MUI.DialogActions>
    </MUI.Dialog>
  );
};

export default Dialog;
