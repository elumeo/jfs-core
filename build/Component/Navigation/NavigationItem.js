import React from 'react';
import { uniqueId } from 'lodash';
import FontIcon from 'react-md/lib/FontIcons';
import ListItem from 'react-md/lib/Lists/ListItem';
import { useHistory } from 'react-router-dom';
import International from '../International';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
const NavigationItem = ({ iconName, messageId, onClick, active, messageString, authorizedOnly, unauthorizedOnly, onClickRoute }) => {
    const history = useHistory();
    const { closeNavigation } = useActions();
    const isAuthorized = useSelector(state => state.Core.Session.isAuthorized);
    const visible = (!authorizedOnly && !unauthorizedOnly || // always display these
        isAuthorized && authorizedOnly || // only when authorized
        !isAuthorized && unauthorizedOnly // only when unauthorized
    );
    return (visible
        ? (React.createElement(International, null, ({ formatMessage }) => (React.createElement(ListItem, { key: uniqueId('navItem_'), primaryText: messageString
                ? messageString
                : formatMessage({ id: messageId }), leftIcon: React.createElement(FontIcon, null, iconName), onClick: (event) => {
                const { location: { pathname } } = history;
                if (onClickRoute != undefined && pathname !== onClickRoute) {
                    history.push(onClickRoute);
                }
                closeNavigation();
                if (onClick) {
                    onClick(event);
                }
            }, active: active }))))
        : React.createElement(React.Fragment, null));
};
export default NavigationItem;
//# sourceMappingURL=NavigationItem.js.map