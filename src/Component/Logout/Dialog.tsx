import React from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import * as Button from './Button';
import useLogout from './useLogout';
import Text from './Text';
import DialogTitle from '@material-ui/core/DialogTitle';

export type Props = {
  onLogout?: () => void;
  pending?: boolean;
};

const Dialog: React.FC<Props> = ({ children, onLogout , pending = false}) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  return (
    <MUIDialog
      open={logout.open}
      onClose={logout.close}
      aria-labelledby='logout-description'
      disableEscapeKeyDown={logout.pending === true}
    >
      <DialogTitle>{formatMessage({ id: 'app.logout.title' })}</DialogTitle>
      <DialogContent
        style={{
          minHeight: 80,
        }}>
        <Text override={children} />
      </DialogContent>
      <DialogActions>
        <Button.Cancel onClick={logout.close} />
        <Button.Submit
          pending={pending || logout.pending}
          onClick={() => (onLogout ? onLogout() : logout.commit({}))}
        />
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
