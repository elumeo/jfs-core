import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import useActions from 'Action/useActions';
const HideNotificationDrawerButton = () => {
    const { hideNotificationDrawerAction } = useActions();
    return (React.createElement(Button, { icon: true, onClick: () => hideNotificationDrawerAction() }, "arrow_forward"));
};
export default HideNotificationDrawerButton;
//# sourceMappingURL=HideNotificationDrawerButton.js.map