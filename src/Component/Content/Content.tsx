import React from 'react';
import './_styles.scss';
// import { useSelector } from 'Types/Redux';
import { createStyles, styled } from '@material-ui/core';

const styles = createStyles({
  'split-view' : {
    width: '100%',
  },
  // active: NavigationDrawerStyles.drawer
});

const Content: React.FC<{key: any}> = ({ children }) => (
  <div
    //style={styles}
    className={'authorized-content'}>
    {children}
  </div>
);

export default Content;
