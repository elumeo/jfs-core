import React from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import { connect } from 'react-redux';
import { checkLogin, updateCredentials } from 'Action/LoginAction';
import Global from '../../Store/Reducer/Global';

import International from 'Component/International';

export interface ILoginCredentialsProps {
  language?: string;
  username?: string;
  password?: string;
  checkLogin?: (payload: checkLogin.Payload) => void;
  updateCredentials?: (payload: updateCredentials.Payload) => void;
}

const LoginCredentials: React.FC<ILoginCredentialsProps> = ({
  updateCredentials,
  checkLogin,
  username,
  password
}) => (
  <International>
    {({ formatMessage }) => (
      <div className="login-credentials">
        <TextField
          id="username"
          type="text"
          required
          placeholder={formatMessage({id: 'login.username'})}
          errorText={formatMessage({id: 'login.username.errorText'})}
          onChange={update => updateCredentials({ username: update as string, password })}/>
        <TextField
          id="password"
          type="password"
          required
          placeholder={formatMessage({id: 'login.password'})}
          errorText={formatMessage({id: 'login.password.errorText'})}
          onChange={update => updateCredentials({ username, password: update as string })}
          onKeyUp={e => e.keyCode === 13 && checkLogin({ username, password })}/>
      </div>
    )}
  </International>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: ILoginCredentialsProps
): ILoginCredentialsProps => ({
  ...ownProps,
  username: state.Core.Login.username,
  password: state.Core.Login.password,
  language: state.Core.Language.language
});

const enhance = connect(mapStateToProps, { updateCredentials, checkLogin });

export default enhance(LoginCredentials);
