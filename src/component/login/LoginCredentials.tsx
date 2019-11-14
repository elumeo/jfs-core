import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import TextField from 'react-md/lib/TextFields/TextField';

export interface ILoginCredentialsProps extends InjectedIntlProps {
  onChangeUsername;
  onChangePassword;
  onLogin;
}

const loginCredentials: React.FC<ILoginCredentialsProps> = ({
  intl: { formatMessage },
  onChangeUsername, onChangePassword, onLogin
}) => (
  <div className="login-credentials">
    <TextField
      id="username"
      type="text"
      required
      placeholder={formatMessage({id: 'login.username'})}
      errorText={formatMessage({id: 'login.username.errorText'})}
      onChange={onChangeUsername}
    />
    <TextField
      id="password"
      type="password"
      required
      placeholder={formatMessage({id: 'login.password'})}
      errorText={formatMessage({id: 'login.password.errorText'})}
      onChange={onChangePassword}
      onKeyUp={e => e.keyCode === 13 && onLogin()}
    />
  </div>
);

export default injectIntl(loginCredentials);