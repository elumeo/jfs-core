import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import './LoginDialog.scss';
import { checkLogin } from '../../store/action/LoginAction';

interface ILoginDialogProps extends InjectedIntlProps {
  children?: any;
  isCheckingSession?: boolean;
  routeType?: string;
  loginVisible?: boolean;
  isAuthorized?: boolean;
  robotLoginAvailable?: boolean;
}

class LoginDialog extends React.Component<ILoginDialogProps> {
  render() {
    const {
      props: { robotLoginAvailable, routeType, isAuthorized, isCheckingSession }
    } = this;

    const loginVisible = (
      routeType === 'authorized' &&
      !isAuthorized &&
      !robotLoginAvailable &&
      !isCheckingSession
    );

    return (
      <div className="login-dialog">
        <DialogContainer
          id={'login-dialog'}
          visible={loginVisible}
          title="Login"
          aria-describedby=""
          actions={<LoginButton/>}
          modal
        >
          <LoginCredentials/>
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

const enhance = compose(
  connect(mapStateToProps, { checkLogin }),
  injectIntl
);

export default enhance(LoginDialog);
