import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { enterUnauthorizedRoute } from 'Store/Action';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';

const NoAuthRoute: React.FC<IBaseRouteProps> = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(enterUnauthorizedRoute());
  }, [props.path, dispatch]);

  return <BaseRoute {...props} />;
};

export default NoAuthRoute;
