import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import { useSelector } from 'Types/Redux';

export type Props = {
  onClick: () => void;
};

const Submit: React.FC<Props> = ({ onClick }) => {
  const { formatMessage } = useIntl()
  const isCheckingLogin = useSelector(state => state.Core.Login.isCheckingLogin);
  return (
    <MUI.Button
      variant='contained'
      color='secondary'
      onClick={onClick}
      disabled={isCheckingLogin}>
      {isCheckingLogin
        ? <MUI.CircularProgress id='check-login-progress'/>
        : formatMessage({ id: 'login.button' })}
    </MUI.Button>
  );
}

export default Submit;
