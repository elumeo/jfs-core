import React, { useCallback } from 'react';
import * as MUI from '@material-ui/core';
import useActions from '../../Store/useActions';
import { useSelector } from '../../Types/Redux';
import Header from './Header';
const Drawer = ({ children }) => {
    const { closeNavigation } = useActions();
    const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
    const close = useCallback(closeNavigation, []);
    return (React.createElement(MUI.Drawer, { open: navigationOpen, anchor: 'left', onClose: close },
        React.createElement(Header, null),
        React.createElement(MUI.List, null, children)));
};
export default Drawer;
//# sourceMappingURL=Drawer.js.map