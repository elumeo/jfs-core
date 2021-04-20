import React from 'react';
import { useIntl } from 'react-intl';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'Types/Redux';

export type Props = {
  onClick: () => void;
};

const Submit: React.FC<Props> = ({ onClick }) => {
  const { formatMessage } = useIntl()
  const isCheckingLogin = useSelector(state => state.Core.Login.isCheckingLogin);
  return (
    <Button
      variant='contained'
      color='secondary'
      onClick={onClick}
      disabled={isCheckingLogin}>
      {isCheckingLogin
        ? <CircularProgress id='check-login-progress'/>
        : formatMessage({ id: 'login.button' })}
    </Button>
  );
}

export default Submit;
