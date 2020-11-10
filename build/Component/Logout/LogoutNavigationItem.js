import React from 'react';
import NavigationItem from '../Navigation/NavigationItem';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { openLogout } from '../../Store/Action/LogoutAction';
const LogoutNavigationItem = ({ robotLoginAvailable, openLogout }) => (!(robotLoginAvailable)
    ? (React.createElement(NavigationItem, { iconName: "exit_to_app", messageId: "app.logout", authorizedOnly: true, onClick: () => openLogout() }))
    : React.createElement(React.Fragment, null));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { robotLoginAvailable: (state.Core.Configuration.config && (state.Core.Configuration.config.RobotUsername &&
        state.Core.Configuration.config.RobotPassword) &&
        state.Core.App.allowRobotLogin) }));
const enhance = compose(connect(mapStateToProps, { openLogout }));
export default enhance(LogoutNavigationItem);
//# sourceMappingURL=LogoutNavigationItem.js.map