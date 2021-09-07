import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'Store/Middleware';

const Router: React.FC = ({ children }) => (
  <ConnectedRouter history={history}>
    {children}
  </ConnectedRouter>
);

export default Router;