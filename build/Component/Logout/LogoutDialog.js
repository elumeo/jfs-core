import React from 'react';
import Dialog from 'react-md/lib/Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../Store/Action/SessionAction';
import { closeLogout } from '../../Store/Action/LogoutAction';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import International from '../International';
const LogoutDialog = ({ logoutOpen, closeLogout, logout, logoutPending, children }) => (React.createElement(International, null, ({ formatMessage }) => (React.createElement(Dialog, { id: "logout", visible: logoutOpen, title: formatMessage({ id: 'app.logout.title' }), onHide: () => closeLogout(), "aria-labelledby": "logoutDescription", modal: true, actions: [
        React.createElement(Button, { flat: true, primary: true, disabled: logoutPending, onClick: () => logout({}) }, logoutPending
            ? React.createElement(CircularProgress, { id: "logout-progress" })
            : formatMessage({ id: 'app.logout.action' })),
        React.createElement(Button, { flat: true, onClick: () => closeLogout() }, formatMessage({ id: 'app.cancel.action' }))
    ] },
    React.createElement("p", { id: "logoutDescription", className: "md-color--secondary-text" }, children
        ? children
        : formatMessage({ id: 'app.logout.message' }))))));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { logoutOpen: state.Core.Logout.logoutOpen, logoutPending: state.Core.Logout.logoutPending }));
const enhance = compose(connect(mapStateToProps, { closeLogout, logout }));
export default enhance(LogoutDialog);
//# sourceMappingURL=LogoutDialog.js.map