import React, { useCallback } from 'react';
import MUIDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';
import Header from './Header';

const Drawer: React.FC = ({ children }) => {
  const { closeNavigation } = useActions();
  const navigationOpen = useSelector(
    state => state.Core.Navigation.navigationOpen
  );
  const close = useCallback(() => closeNavigation(), []);

  return (
    <MUIDrawer
      open={navigationOpen}
      anchor='left'
      onClose={close}>
      <div style={{
        width: 270
      }}>
        <Header/>
        <List>
          {children}
        </List>
      </div>
    </MUIDrawer>
  );
};

export default Drawer;
