import React, { useCallback } from 'react';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import useActions from '../../Store/useActions';
import { useSelector } from '../../Types/Redux';
import Header from './Header';
const Drawer = ({ children }) => {
    const { closeNavigation } = useActions();
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const close = useCallback(closeNavigation, []);
    return (React.createElement(MUIDrawer, { open: navigationOpen, anchor: 'left', onClose: close },
        React.createElement("div", { style: {
                width: 270
            } },
            React.createElement(Header, null),
            React.createElement(List, null, children))));
};
export default Drawer;
