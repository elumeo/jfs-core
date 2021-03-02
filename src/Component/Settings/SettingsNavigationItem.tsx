import React, { useCallback } from 'react';
import useActions from 'Store/Action/useActions';
import NavigationItem from '../Navigation/NavigationItem';

const SettingsNavigationItem: React.FC = () => {
  const {openSettings} =  useActions()
  const memoizedCallback = useCallback(
      openSettings,
    [openSettings],
  )
  return <NavigationItem
    iconName="settings"
    messageId="app.settings"
    onClick={memoizedCallback}
  />
};


export default SettingsNavigationItem;
