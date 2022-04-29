import React from 'react';
import { RouteProps } from 'react-router';
export declare type IBaseRouteProps = RouteProps & {
    translationId?: string;
};
declare const BaseRoute: React.FC<IBaseRouteProps>;
export default BaseRoute;
