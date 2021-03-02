import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer';
import './NavigationDrawer.scss';
import useActions from '../../Store/Action/useActions';
import { useSelector } from '../../Types/Redux';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import List from '@material-ui/core/List';
const NavigationDrawer = ({ position, children }) => {
    const { closeNavigation } = useActions();
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const close = useCallback(closeNavigation, []);
    return (React.createElement("div", { className: 'navigation-drawer' },
        React.createElement(Drawer, { open: navigationOpen, anchor: position, 
            // navItems={children as Element[]}
            onClose: close },
            React.createElement(NavigationDrawerHeader, null),
            React.createElement(List, null, children))));
};
export default NavigationDrawer;
//# sourceMappingURL=NavigationDrawer.js.map