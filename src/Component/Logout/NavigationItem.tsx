import React from 'react';
import * as Navigation from 'Component/Navigation';
import { useSelector } from 'Types/Redux';
import useActions from 'Store/useActions';

const NavigationItem: React.FC = () => {
  const { openLogout } = useActions();
  const robotLoginAvailable = useSelector(state => (
    state.Core.Configuration.config && (
      state.Core.Configuration.config.RobotUsername &&
      state.Core.Configuration.config.RobotPassword
    ) &&
    state.Core.App.allowRobotLogin
  ));

  return (
    !robotLoginAvailable
      ? (
        <Navigation.Item
          iconName="exit_to_app"
          messageId="app.logout"
          authorizedOnly
          onClick={() => openLogout()}/>
      )
      : <></>
  );
};

export default NavigationItem;
