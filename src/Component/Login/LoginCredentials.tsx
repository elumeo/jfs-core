import React from 'react';
import useActions from 'Action/useActions';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import { getIsAuthorizedSelector, getIsCheckingSessionSelector } from 'Store/Selectors/Core/Session';
import Global from 'Store/Reducer/Global';

const LoginCredentials: React.FC = () => {
  const { username, password } = useSelector<Global.State,{
    username: string;
    password: string;
  }>(state => ({
    username: state.Core.Login.username,
    password: state.Core.Login.password
  }));
  const { updateCredentials, checkLogin } = useActions();

  const IsAuthorized = useSelector(getIsAuthorizedSelector)
  const IsCheckingSession = useSelector(getIsCheckingSessionSelector)
  const { formatMessage } = useIntl()
  return (
    <form className='login-credentials' autoCorrect='false' autoComplete='off'>
      <DialogContent>
        <TextField
          id='username'
          type='text'
          required
          error={(IsAuthorized !== null || IsAuthorized !== true )&& !IsCheckingSession && !username}
          placeholder={formatMessage({ id: 'login.username' })}
          helperText={ (IsAuthorized!== null || IsAuthorized !== true)&&IsCheckingSession && !username &&formatMessage({ id: 'login.username.errorText' })}
          onChange={(update) => updateCredentials({
            username: update.target.value as string,
            password
          })} />
      </DialogContent>
      <DialogContent>
        <TextField
          id='password'
          type='password'
          required
          placeholder={formatMessage({ id: 'login.password' })}
          error={(IsAuthorized !== null || IsAuthorized !== true ) && !IsCheckingSession&& !password}
          helperText={(IsAuthorized !== null || IsAuthorized !== true ) && !IsCheckingSession && !password && formatMessage({ id: 'login.password.errorText' })}
          onChange={(update) => updateCredentials({
            username,
            password: update.target.value as string
          })}
          onKeyUp={e => (
            e.keyCode === 13 && checkLogin({ username, password })
          )} />
      </DialogContent>

    </form>

  );
}

export default LoginCredentials;
