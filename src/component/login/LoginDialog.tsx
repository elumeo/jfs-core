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
import Session from '../../base/Session';

interface ILoginDialogProps extends InjectedIntlProps {
  children?: any;
  isAuthorized?: boolean;
  loginAction?: ({}) => void;
  isCheckingLogin?: boolean;
  RobotUsername?: string;
  RobotPassword?: string;
  routeType?: string;
}

interface ILoginDialogState {
  username?: any;
  password?: any;
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

  render() {
    const { props: { isCheckingLogin, isAuthorized, routeType, RobotUsername, RobotPassword }, login } = this;

    const reevaluatingSession = Session.getToken() && !isAuthorized;
    const robotLoginEnabled = RobotPassword !== undefined && RobotUsername !== undefined;

    return (
      <div className="login-dialog">
        <DialogContainer
          id={'login-dialog'}
          visible={!robotLoginEnabled && !reevaluatingSession && !isAuthorized && ['authorized', null].indexOf(routeType) > -1}
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
  isAuthorized: state.sessionReducer.isAuthorized,
  isCheckingLogin: state.sessionReducer.isCheckingLogin,
  RobotUsername: state.configReducer.RobotUsername,
  RobotPassword: state.configReducer.RobotPassword,
  routeType: state.routerReducer.routeType
});

const mapDispatchToProps = { loginAction };

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(LoginDialog);
