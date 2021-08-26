import React from 'react';
import MUIDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';
import { useIntl } from 'react-intl';

const Dialog: React.FC = () => {
  const login = useLogin();
  const { formatMessage } = useIntl();

  return (
    <MUIDialog open={login.open} style={{ marginBottom: '32vh' }}>
      <DialogTitle>{formatMessage({ id: 'app.login' })}</DialogTitle>
      <DialogContent>
        <Credentials
          value={login.credentials}
          onChange={login.onChange}
          onSubmit={login.check}
        />
      </DialogContent>
      <DialogActions>
        <Submit
          onClick={login.check}
          disabled={
            login.credentials.username === '' ||
            login.credentials.password === ''
          }
        />
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
