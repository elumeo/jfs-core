import React from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import * as Button from './Button';
import useLogout from './useLogout';
import Text from './Text';
import DialogTitle from '@material-ui/core/DialogTitle';

const Dialog: React.FC = ({ children }) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  return (
    <MUIDialog
      open={logout.open}
      title={formatMessage({ id: 'app.logout.title' })}
      onClose={logout.close}
      aria-labelledby='logout-description'>
      <DialogTitle>Logout</DialogTitle>
      <DialogContent
        style={{
          minHeight: 80,
        }}>
        <Text override={children} />
      </DialogContent>
      <DialogActions>
        <Button.Submit
          pending={logout.pending}
          onClick={() => logout.commit({})}
        />
        <Button.Cancel onClick={logout.close} />
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
