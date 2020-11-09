import React from 'react';
import Toolbar from 'react-md/lib/Toolbars';
import NavigationButton from './NavigationButton';
import { useSelector } from 'Types/Redux';
const NavigationDrawerHeader = () => {
    const username = useSelector(state => (state.Core.Session.sessionDTO &&
        state.Core.Session.sessionDTO.username));
    return (React.createElement(Toolbar, { actions: React.createElement(NavigationButton, { iconName: "arrow_back" }), className: "md-divider-border md-divider-border--bottom", title: username ? username : '' }));
};
export default NavigationDrawerHeader;
//# sourceMappingURL=NavigationDrawerHeader.js.map