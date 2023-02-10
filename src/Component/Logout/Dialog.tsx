import React from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import * as Button from './Button';
import useLogout from './useLogout';
import Text, { Props as TextProps } from './Text';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';

export type Props = {
  onLogout?: () => void;
  pending?: boolean;
  children?: TextProps['override'];
};
const styles = { minHeight: 80 }

const Dialog: React.FC<Props> = ({ children, onLogout, pending = false }) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  const onClick = React.useCallback<ButtonProgressProps['onClick']>(() => onLogout ? onLogout() : logout.commit({}), [logout, onLogout]);
  return (
    <MUIDialog
      open={logout.open}
      onClose={logout.close}
      aria-labelledby='logout-description'
      disableEscapeKeyDown={logout.pending === true}
      maxWidth={'xs'}
      fullWidth

    >
      <DialogTitle>{formatMessage({ id: 'app.logout.title' })}</DialogTitle>
      <DialogContent sx={styles}>
        <Text override={children} />
      </DialogContent>
      <DialogActions disableSpacing={false}>
        <Button.Cancel onClick={logout.close} />
        <Button.Submit
          pending={pending || logout.pending}
          onClick={onClick}
        />
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
