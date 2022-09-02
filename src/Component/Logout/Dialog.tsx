import React, { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import * as Button from './Button';
import useLogout from './useLogout';
import Text, { Props as TextProps } from './Text';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';
import definition from 'Component/App/Stateless/Style/Theme/Definition';
import Content from 'Component/Content/Content';

export type Props = {
  onLogout?: () => void;
  pending?: boolean;
  children?: TextProps['override'];
};
const styles = {
  content: { minHeight: 80 },
  actions: { gap: definition.spacing(1) }
}

const Dialog: React.FC<Props> = ({ children, onLogout, pending = false }) => {
  const logout = useLogout();
  const { formatMessage } = useIntl();
  const onClick = useCallback<ButtonProgressProps['onClick']>(() => onLogout ? onLogout() : logout.commit(), [onLogout]);
  return (
    <MUIDialog
      open={logout.open}
      maxWidth={'sm'}
      fullWidth
      onClose={logout.close}
      aria-labelledby='logout-description'
      disableEscapeKeyDown={logout.pending === true}
    >
      <DialogTitle>{formatMessage({ id: 'app.logout.title' })}</DialogTitle>
      <DialogContent style={styles.content}>
        <Text override={children} />
      </DialogContent>
      <DialogActions style={styles.actions}>
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
