import React from 'react';
import * as Navigation from 'Component/Navigation';
import { useDispatch } from 'react-redux';
import { openSettings } from 'Store/Action';

const NavigationItem: React.FC = () => {
  const dispatch = useDispatch();
  const onClick = () => dispatch(openSettings())
  return (
    <Navigation.Item
      iconName='settings'
      messageId='app.settings'
      onClick={onClick}
    />
  );
};

export default NavigationItem;
