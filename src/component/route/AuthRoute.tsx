import * as React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../store/action/RouterAction';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';

export interface IAuthRouteProps extends IBaseRouteProps {
  Component: any;
  isAuthorized?: boolean;
  isCheckingSession?: boolean;
  enterAuthorizedRoute?: typeof enterAuthorizedRoute;
}

class AuthRoute extends React.Component<IAuthRouteProps> {
  constructor(props: IAuthRouteProps) {
    super(props);
    this.props.enterAuthorizedRoute();
  }

  render() {
    const {
      props: {Component, isAuthorized, isCheckingSession, path, ...rest}
    } = this;
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
