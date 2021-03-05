import React from 'react';
import './_styles.scss';
import { useSelector } from 'Types/Redux';
import {  createStyles, styled  } from '@material-ui/core';
import { NavigationDrawerStyles } from 'Component/Notification/NotificationDrawer';

const styles = createStyles({
  'split-view' : {
    width: '100%',
  },
  // active: NavigationDrawerStyles.drawer
})

const Content: React.FC = ({ children }) => {
  const splitViewEnabled = useSelector<boolean>(
    state => state.Core.SplitView.splitViewEnabled
  );
  const contentClassName = [
    `authorized-content`,
    splitViewEnabled ? 'split-view--active' : ''
  ].join(' ');

  return (
    <div className={contentClassName} //style={styles}
    >
      {children}
    </div>
  );
}

export default Content;
