import React from 'react';
export interface INavigationItemProps {
    iconName?: string;
    messageId?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    active?: boolean;
    messageString?: string;
    authorizedOnly?: boolean;
    unauthorizedOnly?: boolean;
    onClickRoute?: string;
}
declare const NavigationItem: React.FC<INavigationItemProps>;
export default NavigationItem;
