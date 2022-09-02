import React from 'react';
import { RouteProps } from 'react-router-dom';
declare type Props = RouteProps & {
    children?: React.ReactNode;
};
declare const AuthRoute: React.FC<Props>;
export default AuthRoute;
