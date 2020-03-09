import React from 'react';
import AppToolbar from './AppToolbar';

export default ({ leftTools, rightTools }) => (
  <div className="app-header">
    <AppToolbar
      LeftTools={leftTools}
      RightTools={rightTools}
    />
  </div>
)
