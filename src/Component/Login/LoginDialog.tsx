import React from 'react';
import DialogContainer from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import './LoginDialog.scss';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import Global from 'Store/Reducer/Global';

const LoginDialog: React.FC = () => {
  const {formatMessage} = useIntl()
  const {
    isAuthorized, isCheckingSession, routeType, robotLoginAvailable
  } = useSelector<Global.State,{
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
        open={
          routeType === 'authorized' &&
          !isAuthorized &&
          !robotLoginAvailable &&
          !isCheckingSession
        }
        aria-describedby=''>
          <DialogTitle >Login</DialogTitle>
          
          <LoginCredentials/>

          <DialogActions >
            <LoginButton/>
            </DialogActions>
        </DialogContainer>
    </div>
  );
}

export default LoginDialog;
