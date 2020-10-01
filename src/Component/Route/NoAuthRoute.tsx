import React, { useEffect } from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import useActions from 'Action/useActions';

const NoAuthRoute: React.FC<IBaseRouteProps> = props => {
  const { enterUnauthorizedRoute } = useActions();
  useEffect(
    () => {
      enterUnauthorizedRoute();
    },
    [props.path]
  )

  return (
    <BaseRoute {...props}/>
  );
}

export default NoAuthRoute;
