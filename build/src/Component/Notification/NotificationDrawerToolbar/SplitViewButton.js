import React from 'react';
import { Button } from 'react-md';
import useActions from '../../../../Store/Action/useActions';
import { useSelector } from '../../../../Types/Redux';
const SplitViewButton = () => {
    const notificationDrawerPinned = useSelector(state => (state.Core.Notification.notificationDrawerPinned));
    const { unpinNotificationDrawerAction, pinNotificationDrawerAction } = useActions();
    return (React.createElement(Button, { icon: true, primary: notificationDrawerPinned, className: 'split-view-button', onClick: () => (notificationDrawerPinned
            ? unpinNotificationDrawerAction()
            : pinNotificationDrawerAction()) }, "vertical_split"));
};
export default SplitViewButton;
//# sourceMappingURL=SplitViewButton.js.map