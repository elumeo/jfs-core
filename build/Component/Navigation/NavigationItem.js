import React from 'react';
import FontIcon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import { useIntl } from 'react-intl';
import { ListItemIcon, ListItemText } from '@material-ui/core';
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
        ? (React.createElement(ListItem, { button: true, onClick: (event) => {
                const { location: { pathname } } = history;
                if (onClickRoute != undefined && pathname !== onClickRoute) {
                    history.push(onClickRoute);
                }
                closeNavigation();
                if (onClick) {
                    onClick(event);
                }
            }, selected: active },
            React.createElement(ListItemIcon, null,
                React.createElement(FontIcon, null, iconName)),
            React.createElement(ListItemText, { primary: messageString
                    ? messageString
                    : formatMessage({ id: messageId }) })))
        : React.createElement(React.Fragment, null));
};
export default NavigationItem;
//# sourceMappingURL=NavigationItem.js.map