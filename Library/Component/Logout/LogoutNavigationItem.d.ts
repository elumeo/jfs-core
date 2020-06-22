import { openLogout } from '../../Store/Action/LogoutAction';
export interface ILogoutNavigationItemProps {
    robotLoginAvailable?: boolean;
    openLogout?: typeof openLogout;
}
declare const _default: import("react-redux").ComponentClass<ILogoutNavigationItemProps>;
export default _default;
