import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { DrawerPosition } from 'react-md/lib/Drawers';
import './NavigationDrawer.scss';
import { closeNavigation } from '../../Store/Action/NavigationAction';
export interface INavigationDrawerProps extends RouteComponentProps {
    navigationOpen?: boolean;
    position: DrawerPosition;
    history: any;
    version?: string;
    navigationItems?: any;
    closeNavigation?: typeof closeNavigation;
}
declare const _default: React.ComponentClass<Pick<INavigationDrawerProps, "navigationOpen" | "closeNavigation" | "position" | "version" | "navigationItems"> & {
    wrappedComponentRef?: React.Ref<React.Component<INavigationDrawerProps, any, any>>;
}, any> & import("react-router").WithRouterStatics<import("react-redux").ComponentClass<INavigationDrawerProps>>;
export default _default;
