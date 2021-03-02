import React from 'react';
import './NavigationDrawer.scss';
export interface INavigationDrawerProps {
    position: 'top' | 'left' | 'bottom' | 'right';
}
declare const NavigationDrawer: React.FC<INavigationDrawerProps>;
export default NavigationDrawer;
