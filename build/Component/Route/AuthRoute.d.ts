import React from 'react';
import { IBaseRouteProps } from './BaseRoute';
declare type Props = IBaseRouteProps & {
    children?: React.ReactNode;
};
declare const AuthRoute: React.FC<Props>;
export default AuthRoute;
