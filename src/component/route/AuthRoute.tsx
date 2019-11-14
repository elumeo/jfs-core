import * as React from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../store/action/RouterAction';
import { connect } from 'react-redux';
import IRootReducer from '../../store/reducer/RootReducer';
import NoAccess from './NoAccess';
import { CircularProgress } from 'react-md';

export interface IAuthRouteProps extends IBaseRouteProps {
  Component: any;
  isAuthorized?: boolean;
  isCheckingSession?: boolean;
  loginDialogVisible?: boolean;
  enterAuthorizedRoute?: typeof enterAuthorizedRoute;
  loaded?: boolean;
}

class AuthRoute extends React.Component<IAuthRouteProps> {
  constructor(props: IAuthRouteProps) {
    super(props);
    this.props.enterAuthorizedRoute();
  }

  render() {
    const { Component, isAuthorized, loginDialogVisible, isCheckingSession, loaded: configLoaded, path, ...rest } = this.props;
    if (isAuthorized) {
      return <BaseRoute {...rest} render={props => <Component {...props} />}/>;
    } else if (isCheckingSession && !loginDialogVisible) {
      return <CircularProgress id="checking-session-progress"/>;
    } else if (configLoaded) {
      return <NoAccess/>;
    } else {
      return null;
    }
  }
}

// noinspection JSUnusedGlobalSymbols
export default connect(
  (state: IRootReducer, ownProps: IAuthRouteProps): IAuthRouteProps => ({
    ...ownProps,
    ...state.sessionReducer,
    ...state.systemReducer,
    ...state.configReducer
  }),
  {
    enterAuthorizedRoute
  }
)(AuthRoute);
