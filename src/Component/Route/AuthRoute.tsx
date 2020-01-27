import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../Store/Action/RouterAction';
import { ICoreRootReducer } from '../../Store/Reducer';

export interface IAuthRouteProps extends IBaseRouteProps {
  Component: any;
  isAuthorized?: boolean;
  isCheckingSession?: boolean;
  enterAuthorizedRoute?: typeof enterAuthorizedRoute;
}

const AuthRoute: React.FC<IAuthRouteProps> = ({
  Component, isAuthorized, isCheckingSession, path, enterAuthorizedRoute, ...rest
}) => {
  useEffect(
    () => {
      enterAuthorizedRoute()
    }
  );

  return (
    isAuthorized
      ? <BaseRoute
        {...rest}
        render={props => <Component {...props}/>}
      />
      : isCheckingSession
      ? <CircularProgress id="check-session-progress"/>
      : <></>
  );
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IAuthRouteProps
): IAuthRouteProps => ({
  ...ownProps,
  isAuthorized: state.sessionReducer.isAuthorized,
  isCheckingSession: state.sessionReducer.isCheckingSession
});

const enhance = connect(mapStateToProps, {enterAuthorizedRoute});

export default enhance(AuthRoute);
