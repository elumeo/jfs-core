import React from 'react';
import useActions from '../../Store/useActions';
import * as Navigation from '../Navigation';
const NavigationItem = () => {
    const { openSettings } = useActions();
    return (React.createElement(Navigation.Item, { iconName: "settings", messageId: "app.settings", onClick: openSettings }));
};
export default NavigationItem;
