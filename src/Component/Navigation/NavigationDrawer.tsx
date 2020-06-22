import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer, { DrawerPosition } from 'react-md/lib/Drawers';

import './NavigationDrawer.scss';

import Global from '../../Store/Reducer/Global';
import { closeNavigation } from '../../Store/Action/NavigationAction';

import NavigationDrawerHeader from './NavigationDrawerHeader';

export interface INavigationDrawerProps extends RouteComponentProps {
  navigationOpen?: boolean;
  position: DrawerPosition;
  history;
  version?: string;
  navigationItems?;
  closeNavigation?: typeof closeNavigation;
}

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
  navigationOpen,
  closeNavigation,
  position,
  children
}) => (
  <div className='navigation-drawer'>
    <Drawer
      visible={navigationOpen}
      position={position}
      navItems={children as Element[]}
      onVisibilityChange={() => closeNavigation()}
      header={<NavigationDrawerHeader/>}
      type={Drawer.DrawerTypes.TEMPORARY}
      clickableDesktopOverlay
      overlay
    />
  </div>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: INavigationDrawerProps
): INavigationDrawerProps => ({
  ...state.Core.Navigation,
  ...ownProps
});

export default withRouter(
  connect(mapStateToProps, {closeNavigation})(
    (NavigationDrawer)
  )
);
