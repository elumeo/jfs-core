import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';

import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

export interface ILoginButtonProps {
  intl?: InjectedIntl;
  isCheckingLogin: boolean;
  onLogin: () => void;
}

const loginButton: React.FC<ILoginButtonProps> = (
  {
    intl: {formatMessage},
    isCheckingLogin, onLogin
  }
) => (
  isCheckingLogin
    ? <CircularProgress id="check-login-progress"/>
    : (
      <Button primary flat onClick={onLogin}>
        {formatMessage({id: 'login.button'})}
      </Button>
    )
);

export default injectIntl(loginButton);
