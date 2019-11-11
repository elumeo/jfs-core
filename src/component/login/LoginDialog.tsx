import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import { checkLogin, ICheckLoginPayload } from '../../store/action/SessionAction';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import './LoginDialog.scss';

interface ILoginDialogProps extends InjectedIntlProps {
  children?: any;
  checkLogin?: (payload: ICheckLoginPayload) => void;
  isCheckingLogin?: boolean;
  isCheckingSession?: boolean;
  routeType?: string;
  loginVisible?: boolean;
  isAuthorized?: boolean;
  robotLoginAvailable?: boolean;
}

interface ILoginDialogState {
  username?: any;
  password?: any;
}

class LoginDialog extends React.Component<ILoginDialogProps, ILoginDialogState> {
  state = { username: '', password: '' };

  render() {
    const {
      props: {
        robotLoginAvailable,
        routeType,
        isAuthorized, isCheckingLogin, isCheckingSession,
        checkLogin
      },
      state: { username, password }
    } = this;

    const loginVisible = (
      routeType === 'authorized' &&
      !isAuthorized &&
      !robotLoginAvailable &&
      !isCheckingSession
    )

    return (
      <div className="login-dialog">
        <DialogContainer
          id={'login-dialog'}
          visible={loginVisible}
          title="Login"
          aria-describedby=""
          actions={<LoginButton
            isCheckingLogin={isCheckingLogin}
            onLogin={() => checkLogin({ username, password })}
          />}
          modal
        >
          <LoginCredentials
            onChangeUsername={update => this.setState({ username: update })}
            onChangePassword={update => this.setState({ password: update })}
            onLogin={() => checkLogin({ username, password })}
          />
        </DialogContainer>
      </div>
    )
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: ILoginDialogProps
): ILoginDialogProps => ({
  ...ownProps,
  isAuthorized: state.sessionReducer.isAuthorized,
  isCheckingLogin: state.sessionReducer.isCheckingLogin,
  isCheckingSession: state.sessionReducer.isCheckingSession,
  routeType: state.routerReducer.routeType,
  robotLoginAvailable: (
    state.configReducer.config && (
      state.configReducer.config.RobotUsername &&
      state.configReducer.config.RobotPassword
    ) &&
    state.appReducer.allowRobotLogin
  )
});

const mapDispatchToProps = { checkLogin };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
);

export default enhance(LoginDialog);
