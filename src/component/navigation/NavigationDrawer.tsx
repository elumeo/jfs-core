import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer, { DrawerPosition } from 'react-md/lib/Drawers';

import './NavigationDrawer.scss';

import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { closeNavigation } from '../../store/action/NavigationAction';

import NavigationDrawerHeader from './NavigationDrawerHeader';

interface INavigationDrawerProps extends InjectedIntlProps {
  navigationOpen?: boolean;
  position: DrawerPosition;
  history?;
  version?: string;
  navigationItems?;
  closeNavigation?: typeof closeNavigation;
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
          clickableDesktopOverlay
          overlay
        />
      </div>
    );
  }
}

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
