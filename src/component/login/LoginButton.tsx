import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';

import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { checkLogin, ICheckLoginPayload } from '../../store/action/LoginAction';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';

export interface ILoginButtonProps {
  intl?: InjectedIntl;
  isCheckingLogin?: boolean;
  checkLogin?: (payload: ICheckLoginPayload) => void;
  username?: string;
  password?: string;
}

const LoginButton: React.FC<ILoginButtonProps> = (
  {
    intl: { formatMessage },
    isCheckingLogin, checkLogin,
    username, password
  }
) => (
  isCheckingLogin
    ? <CircularProgress id="check-login-progress"/>
    : (
      <Button primary flat onClick={() => checkLogin({ username, password })}>
        {formatMessage({id: 'login.button'})}
      </Button>
    )
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILoginButtonProps
): ILoginButtonProps => ({
  ...ownProps,
  isCheckingLogin: state.loginReducer.isCheckingLogin,
  username: state.loginReducer.username,
  password: state.loginReducer.password
})

const enhance = compose(
  connect(mapStateToProps, { checkLogin }),
  injectIntl
);

export default enhance(LoginButton);
