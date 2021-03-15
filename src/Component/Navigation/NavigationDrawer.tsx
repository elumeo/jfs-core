import React, { useCallback } from 'react';
import Drawer from '@material-ui/core/Drawer'
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import List from '@material-ui/core/List';

export interface INavigationDrawerProps {
  position:  'top' | 'left' | 'bottom' | 'right';
};

const NavigationDrawer: React.FC<INavigationDrawerProps> = ({
  position,
  children
}) => {
  const { closeNavigation } = useActions();
  const navigationOpen = useSelector(
    state => state.Core.Navigation.navigationOpen
  );
  const close = useCallback(closeNavigation,[])

  return (
    <Drawer
      open={navigationOpen}
      anchor={position}
      onClose={close}>
      <NavigationDrawerHeader/>
      <List>
        {children}
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;
