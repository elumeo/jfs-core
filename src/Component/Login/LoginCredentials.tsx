import React from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import { connect } from 'react-redux';
import {
  checkLogin, ICheckLoginPayload,
  updateCredentials, IUpdateCredentialsPayload
} from '../../Store/Action/LoginAction';
import { ICoreRootReducer } from '../../Store/Reducer';

import International from '../International';

export interface ILoginCredentialsProps {
  language?: string;
  username?: string;
  password?: string;
  checkLogin?: (payload: ICheckLoginPayload) => void;
  updateCredentials?: (payload: IUpdateCredentialsPayload) => void;
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
  state: ICoreRootReducer,
  ownProps: ILoginCredentialsProps
): ILoginCredentialsProps => ({
  ...ownProps,
  username: state.loginReducer.username,
  password: state.loginReducer.password,
  language: state.languageReducer.language
});

const enhance = connect(mapStateToProps, { updateCredentials, checkLogin });

export default enhance(LoginCredentials);
