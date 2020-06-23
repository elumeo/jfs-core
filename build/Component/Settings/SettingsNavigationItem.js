import React from 'react';
import { connect } from 'react-redux';
import { openSettings } from '../../Store/Action/SettingsAction';
import NavigationItem from '../Navigation/NavigationItem';
const SettingsNavigationItem = ({ openSettings }) => (React.createElement(NavigationItem, { iconName: "settings", messageId: "app.settings", onClick: () => openSettings() }));
const enhance = connect(null, { openSettings });
export default enhance(SettingsNavigationItem);
//# sourceMappingURL=SettingsNavigationItem.js.map