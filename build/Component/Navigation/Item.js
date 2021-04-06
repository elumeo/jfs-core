import React from 'react';
import * as MUI from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/useActions';
import { useIntl } from 'react-intl';
const NavigationItem = ({ iconName, messageId, onClick, active, messageString, authorizedOnly, unauthorizedOnly, onClickRoute }) => {
    const history = useHistory();
    const { closeNavigation } = useActions();
    const { formatMessage } = useIntl();
    const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
    const visible = (!authorizedOnly && !unauthorizedOnly || // always display these
        isAuthorized && authorizedOnly || // only when authorized
        !isAuthorized && unauthorizedOnly // only when unauthorized
    );
    return (visible
        ? (React.createElement(MUI.ListItem, { button: true, onClick: (event) => {
                const { location: { pathname } } = history;
                if (onClickRoute != undefined && pathname !== onClickRoute) {
                    history.push(onClickRoute);
                }
                closeNavigation();
                if (onClick) {
                    onClick(event);
                }
            }, selected: active },
            React.createElement(MUI.ListItemIcon, null,
                React.createElement(MUI.Icon, null, iconName)),
            React.createElement(MUI.ListItemText, { primary: messageString
                    ? messageString
                    : formatMessage({ id: messageId }) })))
        : React.createElement(React.Fragment, null));
};
export default NavigationItem;
//# sourceMappingURL=Item.js.map