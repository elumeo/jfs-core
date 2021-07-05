import React from 'react';
import Button from './Button';
import { useSelector } from '../../../Types/Redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const Header = () => {
    const username = useSelector(state => { var _a; return (_a = state.Core.Session.sessionDTO) === null || _a === void 0 ? void 0 : _a.username; });
    return (React.createElement(ListItem, null,
        React.createElement(ListItemIcon, null,
            React.createElement(Button, null)),
        React.createElement(ListItemText, { primary: username })));
};
export default Header;
