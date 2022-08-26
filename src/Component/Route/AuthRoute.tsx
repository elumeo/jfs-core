import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { useSelector } from 'Types/Redux';
import { enterAuthorizedRoute } from 'Store/Action';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router';
type Props = IBaseRouteProps & {
  children?: React.ReactNode
}
const AuthRoute: React.FC<Props> = ({ children, ...rest }) => {
  const dispatch = useDispatch()
  const { isAuthorized, isCheckingSession } = useSelector(state => ({
    isAuthorized: state.Core.Session.isAuthorized,
    isCheckingSession: state.Core.Session.isCheckingSession,
  }));
  useEffect(() => {
    dispatch(enterAuthorizedRoute());
  }, [rest.path, dispatch]);
  console.log('authroute', { children, ...rest, isAuthorized, isCheckingSession })
  return isCheckingSession
    ? <CircularProgress id='check-session-progress' />
    : isAuthorized
      ? <>{children}</>
      : <></>

};

export default AuthRoute;
