import React from 'react';
import { Button } from 'react-md';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
const DismissAllNotificationsButton = () => {
    const notifications = useSelector(state => state.Core.Notification.notifications);
    const { dismissAllNotificationsAction } = useActions();
    return (React.createElement(Button, { icon: true, onClick: () => dismissAllNotificationsAction(), disabled: !notifications.length }, "delete"));
};
export default DismissAllNotificationsButton;
//# sourceMappingURL=DismissAllNotificationsButton.js.map