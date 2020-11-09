import React from 'react';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import './LoginDialog.scss';
import { useSelector } from 'Types/Redux';
const LoginDialog = () => {
    const { isAuthorized, isCheckingSession, routeType, robotLoginAvailable } = useSelector(state => ({
        isAuthorized: state.Core.Session.isAuthorized,
        isCheckingSession: state.Core.Session.isCheckingSession,
        routeType: state.Core.Router.routeType,
        robotLoginAvailable: (state.Core.Configuration.config && (state.Core.Configuration.config.RobotUsername &&
            state.Core.Configuration.config.RobotPassword) &&
            state.Core.App.allowRobotLogin &&
            !state.Core.Login.failedLogins)
    }));
    return (React.createElement("div", { className: 'login-dialog' },
        React.createElement(DialogContainer, { id: 'login-dialog', visible: routeType === 'authorized' &&
                !isAuthorized &&
                !robotLoginAvailable &&
                !isCheckingSession, title: 'Login', "aria-describedby": '', actions: React.createElement(LoginButton, null), modal: true },
            React.createElement(LoginCredentials, null))));
};
export default LoginDialog;
//# sourceMappingURL=LoginDialog.js.map