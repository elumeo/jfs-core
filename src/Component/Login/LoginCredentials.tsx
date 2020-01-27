import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import TextField from 'react-md/lib/TextFields/TextField';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  checkLogin, ICheckLoginPayload,
  updateCredentials, IUpdateCredentialsPayload
} from '../../Store/Action/LoginAction';
import { ICoreRootReducer } from '../../Store/Reducer';

export interface ILoginCredentialsProps extends InjectedIntlProps {
  username?: string;
  password?: string;
  checkLogin?: (payload: ICheckLoginPayload) => void;
  updateCredentials?: (payload: IUpdateCredentialsPayload) => void;
}

const LoginCredentials: React.FC<ILoginCredentialsProps> = (
  {
    intl: { formatMessage },
    updateCredentials, checkLogin, username, password
  }
) => (
  <div className="login-credentials">
    <TextField
      id="username"
      type="text"
      required
      placeholder={formatMessage({id: 'login.username'})}
      errorText={formatMessage({id: 'login.username.errorText'})}
      onChange={update => updateCredentials({ username: update as string, password })}
    />
    <TextField
      id="password"
      type="password"
      required
      placeholder={formatMessage({id: 'login.password'})}
      errorText={formatMessage({id: 'login.password.errorText'})}
      onChange={update => updateCredentials({ username, password: update as string })}
      onKeyUp={e => e.keyCode === 13 && checkLogin({ username, password })}
    />
  </div>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILoginCredentialsProps
): ILoginCredentialsProps => ({
  ...ownProps,
  username: state.loginReducer.username,
  password: state.loginReducer.password
})

const enhance = compose(
  connect(mapStateToProps, { updateCredentials, checkLogin }),
  injectIntl
);

export default enhance(LoginCredentials);
