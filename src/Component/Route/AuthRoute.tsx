import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';

const AuthRoute: React.FC<IBaseRouteProps> = props => {
  const { enterAuthorizedRoute } = useActions();
  const { isAuthorized, isCheckingSession } = useSelector<{
    isAuthorized: boolean;
    isCheckingSession: boolean;
  }>(state => ({
    isAuthorized: state.Core.Session.isAuthorized,
    isCheckingSession: state.Core.Session.isCheckingSession,
  }));
  useEffect(() => {
    enterAuthorizedRoute();
  }, [props.path]);

  return isAuthorized ? (
    <BaseRoute {...props} />
  ) : isCheckingSession ? (
    <CircularProgress id='check-session-progress' />
  ) : (
    <></>
  );
};

export default AuthRoute;
