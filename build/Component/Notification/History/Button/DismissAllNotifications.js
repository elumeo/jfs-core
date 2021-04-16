import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import useActions from '../../../../Store/useActions';
import { useSelector } from '../../../../Types/Redux';
const DismissAllNotificationsButton = () => {
    const history = useSelector(state => state.Core.Notification.history);
    const { removeAllNotifications } = useActions();
    return (React.createElement(IconButton, { onClick: removeAllNotifications, disabled: !history.length },
        React.createElement(Icon, null, "delete")));
};
export default DismissAllNotificationsButton;
