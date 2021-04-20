import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/useActions';
import { useIntl } from 'react-intl';
const NavigationItem = React.forwardRef(({ iconName, messageId, onClick, active, messageString, authorizedOnly, unauthorizedOnly, onClickRoute }, ref) => {
    const history = useHistory();
    const { closeNavigation } = useActions();
    const { formatMessage } = useIntl();
    const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
    const visible = (!authorizedOnly && !unauthorizedOnly || // always display these
        isAuthorized && authorizedOnly || // only when authorized
        !isAuthorized && unauthorizedOnly // only when unauthorized
    );
    return (visible
        ? (React.createElement(ListItem, { ref: ref, button: true, onClick: (event) => {
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
                React.createElement(Icon, null, iconName)),
            React.createElement(ListItemText, { primary: messageString
                    ? messageString
                    : formatMessage({ id: messageId }) })))
        : React.createElement(React.Fragment, null));
});
export default NavigationItem;
