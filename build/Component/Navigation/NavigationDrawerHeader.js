import React from 'react';
import { connect } from 'react-redux';
import Toolbar from 'react-md/lib/Toolbars';
import NavigationButton from './NavigationButton';
const NavigationDrawerHeader = ({ username }) => (React.createElement(Toolbar, { actions: React.createElement(NavigationButton, { iconName: "arrow_back" }), className: "md-divider-border md-divider-border--bottom", title: username ? username : '' }));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { username: (state.Core.Session.sessionDTO &&
        state.Core.Session.sessionDTO.username) }));
const enhance = connect(mapStateToProps);
export default enhance(NavigationDrawerHeader);
//# sourceMappingURL=NavigationDrawerHeader.js.map