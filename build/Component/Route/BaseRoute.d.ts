import React from 'react';
import { RouteProps } from 'react-router-dom';
export declare type BaseRouteProps = RouteProps & {
    title?: string;
    subtitle?: string;
    translateTitle?: boolean;
    translateSubtitle?: boolean;
};
declare const BaseRoute: React.FC<BaseRouteProps>;
export default BaseRoute;
