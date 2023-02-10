import React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import List, { ListProps } from '@mui/material/List';
import { useSelector } from 'Types/Redux';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { closeNavigation } from 'Store/Action';
import { Box } from '@mui/material';

type DrawerProps = {
  children: ListProps['children'],
}
const styles = { width: 270 }

const Drawer = ({ children }: DrawerProps) => {
  const dispatch = useDispatch();
  const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
  const close = React.useCallback(() => dispatch(closeNavigation()), [dispatch]);

  return <MUIDrawer open={navigationOpen} anchor='left' onClose={close}>
    <Box sx={styles}>
      <Header />
      <List>{children}</List>
    </Box>
  </MUIDrawer>;
};

export default Drawer;
