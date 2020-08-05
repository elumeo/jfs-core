import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { connect } from 'react-redux';
import International from 'Component/International';
import Global from '../../Store/Reducer/Global';
import { checkLogin } from '../../Store/Action/LoginAction';

export interface ILoginButtonProps {
  isCheckingLogin?: boolean;
  checkLogin?: (payload: checkLogin.Payload) => void;
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
  state: Global.State,
  ownProps: ILoginButtonProps
): ILoginButtonProps => ({
  ...ownProps,
  isCheckingLogin: state.Core.Login.isCheckingLogin,
  username: state.Core.Login.username,
  password: state.Core.Login.password
});

const enhance = connect(mapStateToProps, { checkLogin });

export default enhance(LoginButton);
