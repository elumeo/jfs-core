import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../Store/Action/RouterAction';
import Global from '../../Store/Reducer/Global';

export interface IAuthRouteProps extends IBaseRouteProps {
  isAuthorized?: boolean;
  isCheckingSession?: boolean;
  enterAuthorizedRoute?: typeof enterAuthorizedRoute;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({
  isAuthorized,
  isCheckingSession,
  enterAuthorizedRoute,
  ...rest
}) => {
  useEffect(
    () => {
      enterAuthorizedRoute()
    }
  );

  return (
    isAuthorized
      ? <BaseRoute {...rest}/>
      : isCheckingSession
        ? <CircularProgress id='check-session-progress'/>
        : <></>
  );
};

const mapStateToProps = (
  state: Global.State,
  ownProps: IAuthRouteProps
): IAuthRouteProps => ({
  ...ownProps,
  isAuthorized: state.Core.Session.isAuthorized,
  isCheckingSession: state.Core.Session.isCheckingSession
});

const enhance = connect(mapStateToProps, {enterAuthorizedRoute});

export default enhance(AuthRoute);
