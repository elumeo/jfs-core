import React from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import { connect } from 'react-redux';
import { checkLogin, updateCredentials } from '../../Store/Action/LoginAction';
import International from '../International';
const LoginCredentials = ({ updateCredentials, checkLogin, username, password }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement("div", { className: "login-credentials" },
    React.createElement(TextField, { id: "username", type: "text", required: true, placeholder: formatMessage({ id: 'login.username' }), errorText: formatMessage({ id: 'login.username.errorText' }), onChange: update => updateCredentials({ username: update, password }) }),
    React.createElement(TextField, { id: "password", type: "password", required: true, placeholder: formatMessage({ id: 'login.password' }), errorText: formatMessage({ id: 'login.password.errorText' }), onChange: update => updateCredentials({ username, password: update }), onKeyUp: e => e.keyCode === 13 && checkLogin({ username, password }) })))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { username: state.Core.Login.username, password: state.Core.Login.password, language: state.Core.Language.language }));
const enhance = connect(mapStateToProps, { updateCredentials, checkLogin });
export default enhance(LoginCredentials);
//# sourceMappingURL=LoginCredentials.js.map