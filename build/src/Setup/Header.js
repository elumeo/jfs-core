import React from 'react';
import { useIntl } from 'react-intl';
import AppHeader from '../../Component/Header/AppHeader';
import NotificationBadge from '../../Component/Notification/NotificationBadge';
import BackendIndicator from '../../Component/Header/BackendIndicator';
const Header = ({}) => {
    const { formatMessage } = useIntl();
    return (React.createElement(AppHeader, { leftTools: () => React.createElement(React.Fragment, null,
            React.createElement(BackendIndicator, null)), rightTools: () => (React.createElement(React.Fragment, null,
            React.createElement(NotificationBadge, null))) }));
};
export default Header;
//# sourceMappingURL=Header.js.map