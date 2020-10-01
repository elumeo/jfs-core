import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import './LoginDialog.scss';
import { useSelector } from 'Types/Redux';

const LoginDialog: React.FC = () => {
  const {
    isAuthorized, isCheckingSession, routeType, robotLoginAvailable
  } = useSelector<{
    isAuthorized: boolean;
    isCheckingSession: boolean;
    routeType: string;
    robotLoginAvailable: boolean;
  }>(state => ({
    isAuthorized: state.Core.Session.isAuthorized,
    isCheckingSession: state.Core.Session.isCheckingSession,
    routeType: state.Core.Router.routeType,
    robotLoginAvailable: (
      state.Core.Configuration.config && (
        state.Core.Configuration.config.RobotUsername &&
        state.Core.Configuration.config.RobotPassword
      ) &&
      state.Core.App.allowRobotLogin &&
      !state.Core.Login.failedLogins
    )
  }));
  return (
    <div className='login-dialog'>
      <DialogContainer
        id={'login-dialog'}
        visible={
          routeType === 'authorized' &&
          !isAuthorized &&
          !robotLoginAvailable &&
          !isCheckingSession
        }
        title='Login'
        aria-describedby=''
        actions={<LoginButton/>}
        modal>
        <LoginCredentials/>
      </DialogContainer>
    </div>
  );
}

export default LoginDialog;
