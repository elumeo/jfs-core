import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import useActions from '../../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
const DismissAllNotificationsButton = () => {
    const notifications = useSelector(state => state.Core.Notification.notifications);
    const { dismissAllNotificationsAction } = useActions();
    return (React.createElement(IconButton, { onClick: () => dismissAllNotificationsAction(), disabled: !notifications.length },
        React.createElement(Icon, null, "delete")));
};
export default DismissAllNotificationsButton;
//# sourceMappingURL=DismissAllNotificationsButton.js.map