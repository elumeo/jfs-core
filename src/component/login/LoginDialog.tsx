import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import { loginAction } from '../../store/action/SessionAction';
import IRootReducer from '../../store/reducer/RootReducer';
import './LoginDialog.scss';
import { setLoginDialogVisibilityAction } from '../../store/action/SystemAction';
import Session from '../../base/Session';

interface ILoginDialogProps extends InjectedIntlProps {
  children?;
  isAuthorized?: boolean;
  loginAction?: typeof loginAction;
  isCheckingLogin?: boolean;
  loginDialogVisible?: boolean;
  RobotUsername?: string;
  RobotPassword?: string;
  routeType?: string;
  setLoginDialogVisibilityAction?: (visible: boolean) => void;
}

interface ILoginDialogState {
  username?: string;
  password?: string;
}

class LoginDialog extends React.Component<ILoginDialogProps, ILoginDialogState> {
  state = {
    username: this.props.RobotUsername || '',
    password: this.props.RobotPassword || ''
  };

  login = () => {
    const { state: { username, password } } = this;
    this.props.loginAction({ username, password });
  };

  componentDidUpdate(prevProps: Readonly<ILoginDialogProps>, prevState: Readonly<ILoginDialogState>, snapshot?: any): void {
    const { isAuthorized, RobotPassword, RobotUsername, routeType } = this.props;
    const reevaluatingSession = Session.getToken() && !isAuthorized;
    const robotLoginEnabled = RobotPassword !== undefined && RobotUsername !== undefined;
    const loginDialogVisible = !robotLoginEnabled && !reevaluatingSession && !isAuthorized && ['authorized', null].indexOf(routeType) > -1;
    if (loginDialogVisible !== this.props.loginDialogVisible) {
      this.props.setLoginDialogVisibilityAction(loginDialogVisible);
    }
  }

  render() {
    const { props: { isCheckingLogin, loginDialogVisible }, login } = this;

    return (
      <div className="login-dialog">
        <DialogContainer
          id={'login-dialog'}
          visible={loginDialogVisible}
          title="Login"
          aria-describedby=""
          actions={<LoginButton
            isCheckingLogin={isCheckingLogin}
            onLogin={login}
          />}
          modal
        >
          <LoginCredentials
            onChangeUsername={update => this.setState({ username: update })}
            onChangePassword={update => this.setState({ password: update })}
            onLogin={login}
          />
        </DialogContainer>
      </div>
    )
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: ILoginDialogProps): ILoginDialogProps => ({
  ...ownProps,
  ...state.sessionReducer,
  ...state.configReducer,
  ...state.routerReducer,
  ...state.systemReducer
});

const mapDispatchToProps = { loginAction, setLoginDialogVisibilityAction };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(LoginDialog);
