import React from 'react';
import NavigationButton from './NavigationButton';
import { useSelector } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
const NavigationDrawerHeader = () => {
    const username = useSelector((state) => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = state.Core) === null || _a === void 0 ? void 0 : _a.Session) === null || _b === void 0 ? void 0 : _b.sessionDTO) === null || _c === void 0 ? void 0 : _c.username);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItem, null,
            React.createElement(ListItemIcon, null,
                React.createElement(NavigationButton, { iconName: "arrow_back" })),
            React.createElement(ListItemText, { primary: username }))));
};
export default NavigationDrawerHeader;
//# sourceMappingURL=NavigationDrawerHeader.js.map