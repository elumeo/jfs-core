import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
const CustomActionButton = ({ notification, onClick, ref, iconName, tooltipLabel }) => (React.createElement(Button, { icon: true, key: 'custom-action-btn', tooltipLabel: tooltipLabel, tooltipPosition: 'left', tooltipDelay: 666, onClick: () => onClick(notification, ref) }, iconName));
export default CustomActionButton;
//# sourceMappingURL=CustomActionButton.js.map