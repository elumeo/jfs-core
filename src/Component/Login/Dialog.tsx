import React from 'react';
import MUIDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
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
