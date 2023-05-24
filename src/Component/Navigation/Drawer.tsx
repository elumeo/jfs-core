import React, { FC } from 'react';
import MUIDrawer, { DrawerProps } from '@mui/material/Drawer';
import List, { ListProps } from '@mui/material/List';
import { useSelector } from 'Types/Redux';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { closeNavigation } from 'Store/Action';
import { Box } from '@mui/material';

type Props = Omit<DrawerProps, 'children'> & {
  children: ListProps['children'],
  width?: number,
}

const Drawer: FC<Props> = ({ children, width = 270, ...rest }) => {
  const dispatch = useDispatch();
  const navigationOpen = useSelector(state => state.Core.Navigation.navigationOpen);
  const close = React.useCallback(() => dispatch(closeNavigation()), [dispatch]);

  return <MUIDrawer open={navigationOpen} anchor='left' onClose={close} {...rest}>
    <Box sx={{width}}>
      <Header />
      <List>{children}</List>
    </Box>
  </MUIDrawer>;
};

export default Drawer;
