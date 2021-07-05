import React from 'react';
import MUIDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';

const Dialog: React.FC = () => {
  const login = useLogin();
  return (
    <MUIDialog open={login.open} style={{
      marginBottom: '32vh'
    }}>
      <DialogTitle>
        Login
      </DialogTitle>
      <DialogContent>
        <Credentials
          value={login.credentials}
          onChange={login.onChange}
          onSubmit={login.check}/>
      </DialogContent>
      <DialogActions>
        <Submit onClick={login.check}/>
      </DialogActions>
    </MUIDialog>
  );
}

export default Dialog;
