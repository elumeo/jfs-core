import React from 'react';
import { logout } from '../../Store/Action/SessionAction';
import { closeLogout } from '../../Store/Action/LogoutAction';
export interface ILogoutDialogProps {
    openLogout?: () => void;
    closeLogout?: typeof closeLogout;
    logout?: typeof logout;
    logoutOpen?: boolean;
    logoutPending?: boolean;
    beforeLogout?: () => void;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<ILogoutDialogProps>, Pick<ILogoutDialogProps, never> & ILogoutDialogProps>;
export default _default;
