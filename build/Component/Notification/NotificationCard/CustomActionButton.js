import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const CustomActionButton = ({ notification, onClick, topLevelRef: ref, iconName, tooltipLabel }) => (React.createElement(Tooltip, { title: tooltipLabel },
    React.createElement(IconButton, { onClick: () => onClick(notification, ref) }, iconName)));
export default CustomActionButton;
//# sourceMappingURL=CustomActionButton.js.map