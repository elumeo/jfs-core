import React from 'react';
import { connect } from 'react-redux';
import DialogContainer from 'react-md/lib/Dialogs';
import LoginCredentials from './LoginCredentials';
import LoginButton from './LoginButton';
import { checkLogin } from '../../Store/Action/LoginAction';
import './LoginDialog.scss';
const LoginDialog = ({ robotLoginAvailable, routeType, isAuthorized, isCheckingSession }) => {
    return (React.createElement("div", { className: 'login-dialog' },
        React.createElement(DialogContainer, { id: 'login-dialog', visible: routeType === 'authorized' &&
                !isAuthorized &&
                !robotLoginAvailable &&
                !isCheckingSession, title: 'Login', "aria-describedby": '', actions: React.createElement(LoginButton, null), modal: true },
            React.createElement(LoginCredentials, null))));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { isAuthorized: state.Core.Session.isAuthorized, isCheckingSession: state.Core.Session.isCheckingSession, routeType: state.Core.Router.routeType, robotLoginAvailable: (state.Core.Configuration.config && (state.Core.Configuration.config.RobotUsername &&
        state.Core.Configuration.config.RobotPassword) &&
        state.Core.App.allowRobotLogin &&
        !state.Core.Login.failedLogins) }));
const enhance = connect(mapStateToProps, { checkLogin });
export default enhance(LoginDialog);
//# sourceMappingURL=LoginDialog.js.map