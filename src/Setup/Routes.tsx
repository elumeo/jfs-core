import React from 'react';
import { Routes as RRoutes, Navigate, Route } from 'react-router-dom';
import AuthRoute from 'Component/Route/AuthRoute';
import NoAuthRoute from 'Component/Route/NoAuthRoute';
import Develop from 'Component/develop';
import DevelopAppLayout from 'Component/DevelopAppLayout';


const Routes: React.FC = () => (
  <RRoutes >
    <Route path='/start' element={<AuthRoute title='app.title' translateTitle subtitle='test' />}>
      <Route index element={<Develop />} />
      <Route path=':id' element={<Develop />} />
    </Route>

    <Route path='/app_layout' element={<NoAuthRoute />} >
      <Route index element={<DevelopAppLayout />} />
    </Route>

    <Route path='*' element={<AuthRoute />}>
      <Route
        path='*'
        element={<Navigate to={'/start'} replace />}
      />
    </Route>
  </RRoutes>
);

export default Routes
