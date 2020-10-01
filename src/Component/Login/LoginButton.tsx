import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import International from 'Component/International';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';

const LoginButton: React.FC = () => {
  const { checkLogin } = useActions();
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
    <International>
      {({ formatMessage }) => (
        <Button
          primary
          flat
          onClick={() => checkLogin({ username, password })}
          disabled={isCheckingLogin}>
          {
            isCheckingLogin
              ? <CircularProgress id='check-login-progress'/>
              : formatMessage({ id: 'login.button' })
          }
        </Button>
      )}
    </International>
  );
}

export default LoginButton;
