import React, { useCallback, useMemo } from 'react';
import MUIDrawer from '@material-ui/core/Drawer';
import List, { ListProps } from '@material-ui/core/List';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';
import Header from './Header';

type DrawerProps = {
  children: ListProps['children'],
}

const Drawer = ({ children }: DrawerProps) => {
  const { closeNavigation } = useActions();
  const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
  const close = useCallback(() => closeNavigation(), []);
  const styles = useMemo(() => ({ width: 270 }), []);

  return <MUIDrawer open={navigationOpen} anchor='left' onClose={close}>
    <div style={styles}>
      <Header />
      <List>{children}</List>
    </div>
  </MUIDrawer>;
};

export default Drawer;
