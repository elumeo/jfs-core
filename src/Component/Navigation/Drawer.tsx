import React, { useCallback } from 'react';
import * as MUI from '@material-ui/core';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';
import Header from './Header';

const Drawer: React.FC = ({ children }) => {
  const { closeNavigation } = useActions();
  const navigationOpen = useSelector(
    state => state.Core.Navigation.navigationOpen
  );
  const close = useCallback(closeNavigation, []);

  return (
    <MUI.Drawer
      open={navigationOpen}
      anchor='left'
      onClose={close}>
      <div style={{
        width: 270
      }}>
        <Header/>
        <MUI.List>
          {children}
        </MUI.List>
      </div>
    </MUI.Drawer>
  );
};

export default Drawer;
