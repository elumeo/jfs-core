import React from 'react';
import { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../Store/Action/RouterAction';
export interface IAuthRouteProps extends IBaseRouteProps {
    isAuthorized?: boolean;
    isCheckingSession?: boolean;
    enterAuthorizedRoute?: typeof enterAuthorizedRoute;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<IAuthRouteProps>, Pick<IAuthRouteProps, never> & IAuthRouteProps>;
export default _default;
