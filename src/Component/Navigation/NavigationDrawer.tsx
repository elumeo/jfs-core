import React from 'react';
import Drawer, { DrawerPosition } from 'react-md/lib/Drawers'
import NavigationDrawerHeader from './NavigationDrawerHeader';
import './NavigationDrawer.scss';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

export interface INavigationDrawerProps {
  position: DrawerPosition;
}

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
  position,
  children
}) => {
  const { closeNavigation } = useActions();
  const navigationOpen = useSelector(
    state => state.Core.Navigation.navigationOpen
  );

  return (
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
}

export default NavigationDrawer;
