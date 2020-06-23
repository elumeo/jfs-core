import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from 'react-md/lib/Drawers';
import './NavigationDrawer.scss';
import { closeNavigation } from '../../Store/Action/NavigationAction';
import NavigationDrawerHeader from './NavigationDrawerHeader';
const NavigationDrawer = ({ navigationOpen, closeNavigation, position, children }) => (React.createElement("div", { className: 'navigation-drawer' },
    React.createElement(Drawer, { visible: navigationOpen, position: position, navItems: children, onVisibilityChange: () => closeNavigation(), header: React.createElement(NavigationDrawerHeader, null), type: Drawer.DrawerTypes.TEMPORARY, clickableDesktopOverlay: true, overlay: true })));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, state.Core.Navigation), ownProps));
export default withRouter(connect(mapStateToProps, { closeNavigation })((NavigationDrawer)));
//# sourceMappingURL=NavigationDrawer.js.map