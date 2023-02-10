import React from 'react';
import MUIDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';
import { useIntl } from 'react-intl';
import { SxProps } from '@mui/material';

const sx: SxProps = {
  marginBottom: '32vh'
}
const Dialog: React.FC = () => {
  const { open, credentials, onChange, check } = useLogin();
  const { formatMessage } = useIntl();
  return (
    <MUIDialog open={open} sx={sx}>
      <DialogTitle>{formatMessage({ id: 'app.login' })}</DialogTitle>
      <DialogContent>
        <Credentials
          value={credentials}
          onChange={onChange}
          onSubmit={check}
        />
      </DialogContent>
      <DialogActions>
        <Submit
          onClick={check}
          disabled={
            !credentials.username ||
            !credentials.password
          }
        />
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
