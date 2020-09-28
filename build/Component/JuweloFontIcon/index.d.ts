import React from 'react';
import './_styles.scss';
declare type Icon = ('apple' | 'badge_percentIcon' | 'bid_block' | 'cash_in_advance' | 'cash_on_delivery' | 'check' | 'delivery_address' | 'ideal' | 'invoice_address' | 'multiple_sources' | 'paypal' | 'ratepay' | 'test' | 'webshop' | 'webshop_bidagent');
export interface IJuweloFontIconProps {
    icon: Icon;
    error?: boolean;
    light?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<IJuweloFontIconProps>, Pick<IJuweloFontIconProps, never> & IJuweloFontIconProps>;
export default _default;
