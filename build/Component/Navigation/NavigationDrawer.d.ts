import React from 'react';
import { DrawerPosition } from 'react-md/lib/Drawers';
import './NavigationDrawer.scss';
export interface INavigationDrawerProps {
    position: DrawerPosition;
}
declare const NavigationDrawer: React.FC<INavigationDrawerProps>;
export default NavigationDrawer;
