import React from 'react';
import * as MUI from '@material-ui/core';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';

const Dialog: React.FC = () => {
  const login = useLogin();
  return (
    <MUI.Dialog
      id={'login-dialog'}
      open={login.open}
      aria-describedby=''>
        <MUI.DialogTitle>
          Login
        </MUI.DialogTitle>
        <Credentials
          value={login.credentials}
          onChange={login.onChange}
          onSubmit={login.check}
          error={login.error}/>
        <MUI.DialogActions>
          <Submit onClick={login.check}/>
        </MUI.DialogActions>
      </MUI.Dialog>
  );
}

export default Dialog;
