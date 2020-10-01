import React from 'react';
import './_styles.scss';

type Icon = (
  'apple' |
  'badge_percentIcon' | 'bid_block' |
  'cash_in_advance' | 'cash_on_delivery' | 'check' |
  'delivery_address' |
  'ideal' |
  'invoice_address' |
  'multiple_sources' |
  'paypal' |
  'ratepay' |
  'test' |
  'webshop' |
  'webshop_bidagent'
);

export interface IJuweloFontIconProps {
  icon: Icon;
  error?: boolean;
  light?: boolean;
}

const JuweloFontIcon: React.FC<IJuweloFontIconProps> = ({
  icon,
  error,
  light
}) => {
  error = error === undefined ? false : error;
  light = light === undefined ? false : light;

  let className = 'juwelo-icon-font jif-' + icon;

  if (light) {
    className += ' -light';
  }

  if (error) {
    className += ' -error';
  }
  return <i className={className}/>;
}

export default JuweloFontIcon;
