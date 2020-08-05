import React from 'react';
import { connect } from 'react-redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import Global from '../../Store/Reducer/Global';
import { checkLogin } from '../../Store/Action/LoginAction';
import './LoginDialog.scss';

interface ILoginDialogProps {
  children?: any;
  isCheckingSession?: boolean;
  routeType?: string;
  loginVisible?: boolean;
  isAuthorized?: boolean;
  robotLoginAvailable?: boolean;
  appInitialized?: boolean;
}

const LoginDialog: React.FC<ILoginDialogProps> = ({
  robotLoginAvailable,
  routeType,
  isAuthorized,
  isCheckingSession
}) => {
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
        modal
      >
        <LoginCredentials/>
      </DialogContainer>
    </div>
  );
}

const mapStateToProps = (
  state: Global.State,
  ownProps: ILoginDialogProps
): ILoginDialogProps => ({
  ...ownProps,
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
});

const enhance = connect(mapStateToProps, { checkLogin });

export default enhance(LoginDialog);
