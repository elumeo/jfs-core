import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import { connect } from 'react-redux';
import International from '../International';
import { checkLogin } from '../../Store/Action/LoginAction';
const LoginButton = ({ isCheckingLogin, checkLogin, username, password }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(Button, { primary: true, flat: true, onClick: () => checkLogin({ username, password }), disabled: isCheckingLogin }, isCheckingLogin
    ? React.createElement(CircularProgress, { id: 'check-login-progress' })
    : formatMessage({ id: 'login.button' })))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { isCheckingLogin: state.Core.Login.isCheckingLogin, username: state.Core.Login.username, password: state.Core.Login.password }));
const enhance = connect(mapStateToProps, { checkLogin });
export default enhance(LoginButton);
//# sourceMappingURL=LoginButton.js.map