import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import useActions from '../../../../../Store/useActions';
import { useSelector } from '../../../../../Types/Redux';
const DismissAllNotificationsButton = () => {
    const history = useSelector(state => state.Core.Notification.history);
    const { removeAllNotifications } = useActions();
    return (React.createElement(IconButton, { onClick: removeAllNotifications, disabled: !history.length },
        React.createElement(DeleteIcon, null)));
};
export default DismissAllNotificationsButton;
