import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { openSettings } from '../../store/action/SettingsAction';
import NavigationItem from '../navigation/NavigationItem';

export interface ISettingsNavigationItemProps {
  openSettings?: () => void;
}

class SettingsNavigationItem extends React.Component<ISettingsNavigationItemProps> {
  render() {
    const { props: { openSettings } } = this;
    return (
      <NavigationItem
        iconName="settings"
        messageId="app.settings"
        onClick={() => openSettings()}
      />
    )
  }
}

const enhance = compose(
  connect(null, { openSettings })
);

export default enhance(SettingsNavigationItem);
