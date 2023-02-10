import React from 'react';
import { enterAuthorizedRoute } from 'Store/Action';
import { useDispatch, useSelector } from 'react-redux';
import * as Session from 'Store/Selector/Core/Session';
import BaseRoute, { type BaseRouteProps } from './BaseRoute';
type Props = React.PropsWithChildren<BaseRouteProps>
const AuthRoute: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { isAuthorized } = useSelector(Session.pickState);

  React.useEffect(
    () => {
      dispatch(enterAuthorizedRoute());
    }, []);
  return (
    isAuthorized
      ? <BaseRoute {...props} />
      : <></>
  )
};

export default AuthRoute
