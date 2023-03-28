import React, {ReactNode} from 'react';
import {createHashRouter, createRoutesFromElements, RouterProvider as RRD_RouterProvider} from 'react-router-dom';

const RouterProvider: React.FC<{routes: ReactNode}> = ({ routes }) => {
  const router = createHashRouter(createRoutesFromElements(routes));
  return <RRD_RouterProvider router={router} />
}

export default RouterProvider;
