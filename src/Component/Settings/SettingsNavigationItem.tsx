import React from 'react';
import { connect } from 'react-redux';
import { openSettings } from '../../Store/Action/SettingsAction';
import NavigationItem from '../Navigation/NavigationItem';

export interface ISettingsNavigationItemProps {
  openSettings?: () => void;
}

const SettingsNavigationItem: React.FC<ISettingsNavigationItemProps> = ({
  openSettings
}) => (
  <NavigationItem
    iconName="settings"
    messageId="app.settings"
    onClick={() => openSettings()}
  />
);

const enhance = connect(null, {openSettings});

export default enhance(SettingsNavigationItem);
