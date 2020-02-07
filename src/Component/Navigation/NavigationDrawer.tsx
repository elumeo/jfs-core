import * as React from 'react';
import { InjectedIntlProps, injectIntl, InjectedIntl } from 'react-intl';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer, { DrawerPosition } from 'react-md/lib/Drawers';

import './NavigationDrawer.scss';

import { ICoreRootReducer } from '../../Store/Reducer';
import { closeNavigation } from '../../Store/Action/NavigationAction';

import NavigationDrawerHeader from './NavigationDrawerHeader';

export interface INavigationDrawerProps extends InjectedIntlProps, RouteComponentProps {
  intl?: InjectedIntl;
  navigationOpen?: boolean;
  position: DrawerPosition;
  history;
  version?: string;
  navigationItems?;
  closeNavigation?: typeof closeNavigation;
}

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
  navigationOpen, closeNavigation, position, children
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

// higher order components -----------------------------------------------------
const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INavigationDrawerProps
): INavigationDrawerProps => ({
  ...state.navigationReducer,
  ...ownProps
});

export default withRouter(
  injectIntl(
    connect(mapStateToProps, {closeNavigation})
    (NavigationDrawer)
  )
);
