import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer'
import './NavigationDrawer.scss';
import useActions from 'Action/useActions';
import { useSelector } from 'react-redux';
import CardHeader from '@material-ui/core/CardHeader';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import Card from '@material-ui/core/Card';
import Global from 'Store/Reducer/Global';
import List from '@material-ui/core/List';

export interface INavigationDrawerProps {
  position:  'top' | 'left' | 'bottom' | 'right';
}

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
  position,
  children
}) => {
  const { closeNavigation } = useActions();
  const navigationOpen = useSelector(
    (state:Global.State) => state.Core.Navigation.navigationOpen
  );
  const close = useCallback(closeNavigation,[])

  return (
    <div className='navigation-drawer'>
      <Drawer
        open={navigationOpen}
         anchor={position}
        // navItems={children as Element[]}
        onClose={close}
        // header={}
        // type={Drawer.DrawerTypes.TEMPORARY}
        // clickableDesktopOverläay
        // overlay
      >
        <NavigationDrawerHeader/>
        <List  >
        {children} 
        </List>
        </Drawer>
    </div>
  );
}

export default NavigationDrawer;
