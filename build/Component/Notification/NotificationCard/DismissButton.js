import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import useActions from '../../../Store/Action/useActions';
const DismissButton = ({ notification, onClick, topLevelRef: ref }) => {
    const { dismissNotificationAction } = useActions();
    return (React.createElement(Button, { icon: true, key: 'dismiss-btn', onClick: event => {
            event.stopPropagation();
            dismissNotificationAction(notification.id);
            if (typeof onClick == 'function') {
                onClick(notification, ref);
            }
        } }, "close"));
};
export default DismissButton;
//# sourceMappingURL=DismissButton.js.map