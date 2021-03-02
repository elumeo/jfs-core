import React, { useCallback } from 'react';
import useActions from '../../../Store/Action/useActions';
import NavigationItem from '../Navigation/NavigationItem';
const SettingsNavigationItem = () => {
    const { openSettings } = useActions();
    const memoizedCallback = useCallback(openSettings, [openSettings]);
    return React.createElement(NavigationItem, { iconName: "settings", messageId: "app.settings", onClick: memoizedCallback });
};
export default SettingsNavigationItem;
//# sourceMappingURL=SettingsNavigationItem.js.map