import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

export interface ILoginButtonProps extends InjectedIntlProps {
  isCheckingLogin: boolean;
  onLogin: any;
}

const loginButton: React.SFC<ILoginButtonProps> = ({
  intl: { formatMessage },
  isCheckingLogin, onLogin
}) => (
  isCheckingLogin
    ? <CircularProgress
        id="loginIsCheckingSpinner2"
        style={{marginLeft: 'auto'}}
      />
    : <Button
        children={formatMessage({id: 'login.button'})}
        primary
        flat
        onClick={onLogin}
        style={{marginLeft: 'auto'}}
      />
)

export default injectIntl(loginButton);
