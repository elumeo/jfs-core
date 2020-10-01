import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import useActions from '../../../Store/Action/useActions';
const HideButton = ({ notification, onClick, topLevelRef: ref }) => {
    const { fadeNotificationOffScreenAction } = useActions();
    return (React.createElement(Button, { icon: true, key: 'hide-btn', onClick: event => {
            event.stopPropagation();
            fadeNotificationOffScreenAction(notification.id);
            if (typeof onClick == 'function') {
                onClick(notification, ref);
            }
        } }, "arrow_forward"));
};
export default HideButton;
//# sourceMappingURL=HideButton.js.map