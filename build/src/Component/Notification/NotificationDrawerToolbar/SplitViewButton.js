import React from 'react';
import Button from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import useActions from '../../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
const SplitViewButton = () => {
    const notificationDrawerPinned = useSelector(state => (state.Core.Notification.notificationDrawerPinned));
    const { unpinNotificationDrawerAction, pinNotificationDrawerAction } = useActions();
    return (React.createElement(Button, { color: notificationDrawerPinned ? 'primary' : 'secondary', 
        // className={'split-view-button'}
        onClick: () => (notificationDrawerPinned
            ? unpinNotificationDrawerAction()
            : pinNotificationDrawerAction()) },
        React.createElement(Icon, null, "vertical_split")));
};
export default SplitViewButton;
//# sourceMappingURL=SplitViewButton.js.map