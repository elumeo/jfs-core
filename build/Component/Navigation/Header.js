import React from 'react';
import Button from './Button';
import { useSelector } from '../../Types/Redux';
import * as MUI from '@material-ui/core';
const Header = () => {
    const username = useSelector(state => { var _a; return (_a = state.Core.Session.sessionDTO) === null || _a === void 0 ? void 0 : _a.username; });
    return (React.createElement(MUI.ListItem, null,
        React.createElement(MUI.ListItemIcon, null,
            React.createElement(Button, { iconName: "arrow_back" })),
        React.createElement(MUI.ListItemText, { primary: username })));
};
export default Header;
//# sourceMappingURL=Header.js.map