import React from 'react';
import Drawer from 'react-md/lib/Drawers';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import './NavigationDrawer.scss';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from '../../../Types/Redux';
const NavigationDrawer = ({ position, children }) => {
    const { closeNavigation } = useActions();
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    return (React.createElement("div", { className: 'navigation-drawer' },
        React.createElement(Drawer, { visible: navigationOpen, position: position, navItems: children, onVisibilityChange: () => closeNavigation(), header: React.createElement(NavigationDrawerHeader, null), type: Drawer.DrawerTypes.TEMPORARY, clickableDesktopOverlay: true, overlay: true })));
};
export default NavigationDrawer;
//# sourceMappingURL=NavigationDrawer.js.map