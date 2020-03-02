import React from 'react';

import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';
import { checkLogin, ICheckLoginPayload } from '../../Store/Action/LoginAction';
import International from '../International';

export interface ILoginButtonProps {
  isCheckingLogin?: boolean;
  checkLogin?: (payload: ICheckLoginPayload) => void;
  username?: string;
  password?: string;
}

const LoginButton: React.FC<ILoginButtonProps> = ({
  isCheckingLogin, checkLogin,
  username, password
}) => (
  <International>
    {({ formatMessage }) => (
      <Button
        primary
        flat
        onClick={() => checkLogin({ username, password })}
        disabled={isCheckingLogin}>
        {
          isCheckingLogin
            ? <CircularProgress id='check-login-progress'/>
            : formatMessage({ id: 'login.button' })
        }
      </Button>
    )}
  </International>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILoginButtonProps
): ILoginButtonProps => ({
  ...ownProps,
  isCheckingLogin: state.loginReducer.isCheckingLogin,
  username: state.loginReducer.username,
  password: state.loginReducer.password
});

const enhance = connect(mapStateToProps, { checkLogin });

export default enhance(LoginButton);
