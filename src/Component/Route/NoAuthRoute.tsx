import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { enterUnauthorizedRoute } from 'Store/Action';
import BaseRoute, { type BaseRouteProps } from './BaseRoute';

const NoAuthRoute: React.FC<BaseRouteProps> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(enterUnauthorizedRoute());
  }, []);

  return <BaseRoute {...props} />;
};

export default NoAuthRoute;
