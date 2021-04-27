import React from 'react';
import useActions from 'Store/useActions';
import * as Navigation from 'Component/Navigation';

const NavigationItem: React.FC = () => {
  const { openSettings } = useActions();
  return (
    <Navigation.Item
      iconName="settings"
      messageId="app.settings"
      onClick={openSettings}/>
  );
};

export default NavigationItem;
