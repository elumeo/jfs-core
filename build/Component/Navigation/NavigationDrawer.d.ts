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
declare const _default: React.ComponentClass<Pick<Pick<INavigationDrawerProps, never> & INavigationDrawerProps, "position" | "closeNavigation" | "navigationOpen" | "version" | "navigationItems">, any> & import("react-router").WithRouterStatics<import("react-redux").ConnectedComponent<React.FC<INavigationDrawerProps>, Pick<INavigationDrawerProps, never> & INavigationDrawerProps>>;
export default _default;
