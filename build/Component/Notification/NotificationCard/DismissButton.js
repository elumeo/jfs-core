import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import useActions from '../../../Store/Action/useActions';
const DismissButton = ({ notification, onClick, topLevelRef: ref }) => {
    const { dismissNotificationAction } = useActions();
    return (React.createElement(IconButton
    // icon
    // key='dismiss-btn'
    , { 
        // icon
        // key='dismiss-btn'
        onClick: event => {
            event.stopPropagation();
            dismissNotificationAction(notification.id);
            if (typeof onClick == 'function') {
                onClick(notification, ref);
            }
        } },
        React.createElement(Icon, null, " close")));
};
export default DismissButton;
//# sourceMappingURL=DismissButton.js.map