import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'Types/Redux';
import { enterAuthorizedRoute } from 'Store/Action';
import { useDispatch } from 'react-redux';
import { Outlet, RouteProps } from 'react-router-dom';
type Props = RouteProps & {
  children?: React.ReactNode
}
const AuthRoute: React.FC<Props> = ({ ...rest }: RouteProps) => {
  const dispatch = useDispatch()
  const { isAuthorized, isCheckingSession } = useSelector(state => ({
    isAuthorized: state.Core.Session.isAuthorized,
    isCheckingSession: state.Core.Session.isCheckingSession,
  }));
  useEffect(() => {
    if (isAuthorized) {
      dispatch(enterAuthorizedRoute());
    }
  }, [rest.path, isAuthorized, isCheckingSession]);
  return isCheckingSession
    ? <CircularProgress id='check-session-progress' />
    : isAuthorized
      ? <Outlet />
      : <></>;

};

export default AuthRoute;
