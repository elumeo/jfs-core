import React, { useEffect } from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';

import { enterUnauthorizedRoute } from '../../Store/Action/RouterAction';

import { ICoreRootReducer } from '../../Store/Reducer';

import { connect } from 'react-redux';
import { compose } from 'redux';

export interface INoAuthRouteProps extends IBaseRouteProps {
  Component: any;
  enterUnauthorizedRoute?: typeof enterUnauthorizedRoute;
}

const NoAuthRoute: React.FC<INoAuthRouteProps> = ({
  Component, enterUnauthorizedRoute, ...rest
}) => {
  useEffect(() => {
    enterUnauthorizedRoute();
  })

  return (
    <BaseRoute
      {...rest}
      render={props => <Component {...props}/>}
    />
  );
}

const mapStateToProps = (
  _state: ICoreRootReducer,
  ownProps: INoAuthRouteProps
): INoAuthRouteProps => ({
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {enterUnauthorizedRoute})
);

export default enhance(NoAuthRoute);
