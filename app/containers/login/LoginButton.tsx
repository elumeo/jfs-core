import * as React from 'react';
import {InjectedIntlProps, injectIntl} from 'react-intl';

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
    <Button
        children={isCheckingLogin ? <CircularProgress
            id="loginIsCheckingSpinner2"
        /> : formatMessage({id: 'login.button'})}
        primary
        flat
        onClick={onLogin}
      />
)

export default injectIntl(loginButton);
