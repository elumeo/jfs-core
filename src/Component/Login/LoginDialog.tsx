import React from 'react';
import { connect } from 'react-redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import { ICoreRootReducer } from '../../Store/Reducer';
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
    state.appReducer.allowRobotLogin &&
    !state.loginReducer.failedLogins
  )
});

const enhance = connect(mapStateToProps, { checkLogin });

export default enhance(LoginDialog);
