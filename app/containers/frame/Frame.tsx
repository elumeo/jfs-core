import * as React from 'react';
import AppHeader from '../header/AppHeader';
import AppSnackbar from '../snackbar/AppSnackbar';

import './Frame.scss';

export default ({ children }) => (
  <div className="app-frame">
    <AppHeader/>
    {children}
    <AppSnackbar/>
  </div>
);
