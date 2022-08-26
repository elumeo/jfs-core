import React from 'react';
import { Routes as Router, Navigate, Route } from 'react-router-dom';
import Content from 'Component/Content/Content';
import AuthRoute from 'Component/Route/AuthRoute';
import NoAuthRoute from 'Component/Route/NoAuthRoute';
import Develop from 'Component/develop';

const Routes: React.FC = () => (
  <Content>
    <Router>
      <Route
        key='start'
        path='/start'
        element={<AuthRoute><Develop /></AuthRoute>}
      />

      <Route
        key='start'
        path='/start2'
        element={<AuthRoute>hi</AuthRoute>}
      />
      <Route
        key='default'
        path='/'
        element={<Navigate to={'/start'} />}
      />
    </Router>
  </Content>
);

export default Routes;
