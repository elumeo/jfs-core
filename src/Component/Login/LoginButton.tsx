import React from 'react';
// import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import International from 'Component/International';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';

const LoginButton: React.FC = () => {
  const { checkLogin } = useActions();
  const {formatMessage} = useIntl()
  const { isCheckingLogin, username, password } = useSelector<{
    username: string;
    password: string;
    isCheckingLogin: boolean;
  }>(state => ({
    username: state.Core.Login.username,
    password: state.Core.Login.password,
    isCheckingLogin: state.Core.Login.isCheckingLogin
  }));
  return (
        <Button
          variant={'contained'}
          color={'secondary'}
          onClick={() => checkLogin({ username, password })}
          disabled={isCheckingLogin}>
          {
            isCheckingLogin
              ? <CircularProgress id='check-login-progress'/>
              : formatMessage({ id: 'login.button' })
          }
        </Button>
  );
}

export default LoginButton;
