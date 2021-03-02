import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import useActions from '../../../Store/Action/useActions';
const HideButton = ({ notification, onClick, topLevelRef: ref }) => {
    const { fadeNotificationOffScreenAction } = useActions();
    return (React.createElement(IconButton, { key: 'hide-btn', onClick: event => {
            event.stopPropagation();
            fadeNotificationOffScreenAction(notification.id);
            if (typeof onClick == 'function') {
                onClick(notification, ref);
            }
        } },
        React.createElement(Icon, null, "arrow_forward")));
};
export default HideButton;
//# sourceMappingURL=HideButton.js.map