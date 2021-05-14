import React from 'react';
import useActions from '../../Store/useActions';
import * as Navigation from '../Navigation';
const NavigationItem = () => {
    const { openSettings } = useActions();
    const onClick = React.useCallback(() => openSettings(), [openSettings]);
    return (React.createElement(Navigation.Item, { iconName: "settings", messageId: "app.settings", onClick: onClick }));
};
export default NavigationItem;
