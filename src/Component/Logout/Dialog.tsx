import React, { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import * as Button from './Button';
import useLogout from './useLogout';
import Text, { Props as TextProps } from './Text';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';

export type Props = {
  onLogout?: () => void;
  pending?: boolean;
  children?: TextProps['override'];
};

const Dialog: React.FC<Props> = ({ children, onLogout, pending = false }) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  const styles = useMemo<React.CSSProperties>(() => ({ minHeight: 80 }), []);
  const onClick = useCallback<ButtonProgressProps['onClick']>(() => onLogout ? onLogout() : logout.commit({}), [onLogout]);
  return (
    <MUIDialog
      open={logout.open}
      onClose={logout.close}
      aria-labelledby='logout-description'
      disableEscapeKeyDown={logout.pending === true}
    >
      <DialogTitle>{formatMessage({ id: 'app.logout.title' })}</DialogTitle>
      <DialogContent style={styles}>
        <Text override={children} />
      </DialogContent>
      <DialogActions>
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
