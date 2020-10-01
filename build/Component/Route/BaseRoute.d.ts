import React from 'react';
import { RouteProps } from 'react-router-dom';
import { InjectedIntl } from 'react-intl';
export declare type IBaseRouteProps = RouteProps & {
    intl?: InjectedIntl;
    Component?: () => JSX.Element;
    translationId?: string;
    updateDocumentTitle?: boolean;
};
declare const _default: React.FC<IBaseRouteProps>;
export default _default;
