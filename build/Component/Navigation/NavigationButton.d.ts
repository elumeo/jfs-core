import { openNavigation, closeNavigation } from '../../Store/Action/NavigationAction';
export interface INavigationButtonProps {
    navigationOpen?: any;
    openNavigation?: typeof openNavigation;
    closeNavigation?: typeof closeNavigation;
    iconName: string;
}
declare const _default: import("react-redux").ComponentClass<INavigationButtonProps>;
export default _default;
