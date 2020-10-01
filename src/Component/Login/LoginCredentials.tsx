import React from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import International from 'Component/International';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

const LoginCredentials: React.FC = () => {
  const { username, password } = useSelector<{
    username: string;
    password: string;
  }>(state => ({
    username: state.Core.Login.username,
    password: state.Core.Login.password
  }));
  const { updateCredentials, checkLogin } = useActions();
  return (
    <International>
      {({ formatMessage }) => (
        <div className="login-credentials">
          <TextField
            id="username"
            type="text"
            required
            placeholder={formatMessage({id: 'login.username'})}
            errorText={formatMessage({id: 'login.username.errorText'})}
            onChange={update => updateCredentials({
              username: update as string,
              password
            })}/>
          <TextField
            id="password"
            type="password"
            required
            placeholder={formatMessage({id: 'login.password'})}
            errorText={formatMessage({id: 'login.password.errorText'})}
            onChange={update => updateCredentials({
              username,
              password: update as string
            })}
            onKeyUp={e => (
              e.keyCode === 13 && checkLogin({ username, password })
            )}/>
        </div>
      )}
    </International>
  );
}

export default LoginCredentials;
