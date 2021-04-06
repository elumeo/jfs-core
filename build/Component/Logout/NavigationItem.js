import React from 'react';
import * as Navigation from '../Navigation';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/useActions';
const NavigationItem = () => {
    const { openLogout } = useActions();
    const robotLoginAvailable = useSelector(state => (state.Core.Configuration.config && (state.Core.Configuration.config.RobotUsername &&
        state.Core.Configuration.config.RobotPassword) &&
        state.Core.App.allowRobotLogin));
    return (!robotLoginAvailable
        ? (React.createElement(Navigation.Item, { iconName: "exit_to_app", messageId: "app.logout", authorizedOnly: true, onClick: () => openLogout() }))
        : React.createElement(React.Fragment, null));
};
export default NavigationItem;
//# sourceMappingURL=NavigationItem.js.map