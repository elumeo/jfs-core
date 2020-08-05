import React from 'react';
import { openLogout } from '../../Store/Action/LogoutAction';
export interface ILogoutNavigationItemProps {
    robotLoginAvailable?: boolean;
    openLogout?: typeof openLogout;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<ILogoutNavigationItemProps>, Pick<ILogoutNavigationItemProps, never> & ILogoutNavigationItemProps>;
export default _default;
