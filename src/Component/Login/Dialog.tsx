import React from 'react';
import MUIDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';

const Dialog: React.FC = () => {
  const login = useLogin();
  return (
    <MUIDialog
      open={login.open}
      aria-describedby=''>
        <DialogTitle>
          Login
        </DialogTitle>
        <Credentials
          value={login.credentials}
          onChange={login.onChange}
          onSubmit={login.check}
          error={login.error}/>
        <DialogActions>
          <Submit onClick={login.check}/>
        </DialogActions>
    </MUIDialog>
  );
}

export default Dialog;
