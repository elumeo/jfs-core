import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer, { DrawerPosition } from 'react-md/lib/Drawers';

import './NavigationDrawer.scss';

import IRootReducer from '../../store/reducer/RootReducer';
import { closeNavigation } from '../../store/action/NavigationAction';

import NavigationDrawerHeader from './NavigationDrawerHeader';

interface INavigationDrawerProps extends InjectedIntlProps {
  navigationOpen?: boolean;
  position: DrawerPosition;
  history?: any;
  version?: string;
  navigationItems?: any;
  closeNavigation?: () => void;
}

interface INavigationDrawerState {

}

class NavigationDrawer extends React.Component<INavigationDrawerProps, INavigationDrawerState> {
  render() {
    const {
      props: {
        navigationOpen, closeNavigation, position, children
      },
    } = this;

    return (
      <div className="navigation-drawer">
        <Drawer
          visible={navigationOpen}
          position={position}
          navItems={children as Element[]}
          onVisibilityChange={() => closeNavigation()}
          header={<NavigationDrawerHeader/>}
          type={Drawer.DrawerTypes.TEMPORARY}
          style={{ zIndex: 100 }}
          clickableDesktopOverlay
          overlay
        />
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (
  state: IRootReducer,
  ownProps: INavigationDrawerProps
): INavigationDrawerProps => ({
  ...ownProps,
  ...state.navigationReducer
});

export default withRouter(
  injectIntl(
    connect(mapStateToProps, { closeNavigation })
    (NavigationDrawer)
  )
);
