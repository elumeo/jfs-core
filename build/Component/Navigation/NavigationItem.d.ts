import React from 'react';
import { History } from 'history';
import { closeNavigation } from '../../Store/Action/NavigationAction';
export interface INavigationItemProps {
    iconName?: string;
    messageId?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    active?: boolean;
    messageString?: string;
    authorizedOnly?: boolean;
    unauthorizedOnly?: boolean;
    isAuthorized?: boolean;
    closeNavigation?: typeof closeNavigation;
    onClickRoute?: string;
    history?: History;
}
declare const _default: import("react-redux").ConnectedComponent<any, Pick<unknown, never> & INavigationItemProps>;
export default _default;
