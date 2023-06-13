import React from 'react';
import * as Navigation from 'Component/Navigation';
import { useSelector } from 'Types/Redux';
import { openLogout } from 'Store/Action';
import { useDispatch } from 'react-redux';

const NavigationItem: React.FC = () => {
  const dispatch = useDispatch();
  const robotLoginAvailable = useSelector(
    state =>
      state.Core.Configuration.config &&
      state.Core.Configuration.config?.RobotUsername &&
      state.Core.Configuration.config?.RobotPassword &&
      state.Core.Configuration.config?.AllowRobotLogin,
  );

  return !robotLoginAvailable ? (
    <Navigation.Item
      iconName='exit_to_app'
      messageId='app.logout'
      authorizedOnly
      onClick={() => dispatch(openLogout())}
    />
  ) : (
    <></>
  );
};

export default NavigationItem;
