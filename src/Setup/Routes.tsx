import React from 'react';
import { Routes as RRoutes, Navigate, Route } from 'react-router-dom';
import AuthRoute from 'Component/Route/AuthRoute';
import NoAuthRoute from 'Component/Route/NoAuthRoute';


const Routes: React.FC = () => (
  <RRoutes >
    <Route path='/start' element={<AuthRoute title='app.title' translateTitle subtitle='test' />}>
      <Route index element={<></>} />
      <Route path=':id' element={<></>} />
    </Route>

    <Route path='/app_layout' element={<NoAuthRoute />} >
      <Route index element={<></>} />
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
