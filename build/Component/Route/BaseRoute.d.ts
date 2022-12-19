import React from 'react';
import { RouteProps } from 'react-router-dom';
export type IBaseRouteProps = RouteProps & {
    Component?: React.FC;
    translationId?: string;
};
declare const BaseRoute: React.FC<IBaseRouteProps>;
export default BaseRoute;
