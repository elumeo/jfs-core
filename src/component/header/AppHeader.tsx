import * as React from 'react';
import NavigationDrawer from '../navigation/NavigationDrawer';
import AppToolbar from './AppToolbar';

export default ({ leftTools, rightTools }) => (
  <div className="app-header">
    <AppToolbar
      LeftTools={leftTools}
      RightTools={rightTools}
    />
  </div>
)
