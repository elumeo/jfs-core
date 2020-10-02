import React from 'react';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import International from '../../../Component/International';
import { useSelector } from '../../../Types/Redux';
import useActions from '../../../Store/Action/useActions';
const LogoutDialog = ({ children }) => {
    const { logout, closeLogout } = useActions();
    const { logoutOpen, logoutPending } = useSelector(state => ({
        logoutOpen: state.Core.Logout.logoutOpen,
        logoutPending: state.Core.Logout.logoutPending
    }));
    return (React.createElement(International, null, ({ formatMessage }) => (React.createElement(Dialog, { id: "logout", visible: logoutOpen, title: formatMessage({ id: 'app.logout.title' }), onHide: () => closeLogout(), "aria-labelledby": "logoutDescription", modal: true, actions: [
            React.createElement(Button, { flat: true, primary: true, disabled: logoutPending, onClick: () => logout({}) }, logoutPending
                ? React.createElement(CircularProgress, { id: "logout-progress" })
                : formatMessage({ id: 'app.logout.action' })),
            React.createElement(Button, { flat: true, onClick: () => closeLogout() }, formatMessage({ id: 'app.cancel.action' }))
        ] },
        React.createElement("p", { id: "logoutDescription", className: "md-color--secondary-text" }, children
            ? children
            : formatMessage({ id: 'app.logout.message' }))))));
};
export default LogoutDialog;
//# sourceMappingURL=LogoutDialog.js.map