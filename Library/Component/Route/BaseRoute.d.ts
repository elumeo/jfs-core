import React from 'react';
import { RouteProps } from 'react-router-dom';
export declare type IBaseRouteProps = RouteProps & {
    Component?: () => JSX.Element;
    translationId?: string;
};
declare const BaseRoute: React.FC<IBaseRouteProps>;
export default BaseRoute;
