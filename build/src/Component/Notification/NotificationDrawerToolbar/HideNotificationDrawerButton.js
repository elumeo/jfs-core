import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import useActions from '../../../../Store/Action/useActions';
const HideNotificationDrawerButton = () => {
    const { hideNotificationDrawerAction } = useActions();
    return (React.createElement(IconButton, { onClick: () => hideNotificationDrawerAction() },
        React.createElement(Icon, null, "arrow_forward")));
};
export default HideNotificationDrawerButton;
//# sourceMappingURL=HideNotificationDrawerButton.js.map