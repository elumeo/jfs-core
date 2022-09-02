import React from 'react';
import { Routes as Router, Navigate, Route } from 'react-router-dom';
import AuthRoute from 'Component/Route/AuthRoute';
import Develop from 'Component/develop';


const Routes: React.FC = () => (
  <>
    <Router>
      <Route path='/start/:id' element={<AuthRoute />}>
        <Route path='/start/:id' element={<Develop />} />
      </Route>
      <Route path='/start' element={<AuthRoute />}>
        <Route path='/start' element={<Develop />} />
      </Route>

      <Route
        path='/*'
        element={<Navigate to={'/start'} />}
      />
    </Router>
  </>
);

export default Routes;
