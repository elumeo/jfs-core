import React, { useCallback, useMemo } from 'react';
import MUIDrawer from '@mui/material/Drawer';
import List, { ListProps } from '@mui/material/List';
import { useSelector } from 'Types/Redux';
import Header from './Header';
import { closeNavigation } from 'Store/Action';
import { useDispatch } from 'react-redux';

type DrawerProps = {
  children: ListProps['children'],
}

const Drawer = ({ children }: DrawerProps) => {
  const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
  const dispatch = useDispatch()
  const close = useCallback(() => dispatch(closeNavigation()), [dispatch]);
  const styles = useMemo(() => ({ width: 270 }), []);

  return <MUIDrawer open={navigationOpen} anchor='left' onClose={close}>
    <div style={styles}>
      <Header />
      <List>{children}</List>
    </div>
  </MUIDrawer>;
};

export default Drawer;
