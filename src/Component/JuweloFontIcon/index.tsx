import React from 'react';
import './_styles.scss';

export type Icon = (
  'apple' |
  'badge_percentIcon' | 'bid_block' | 'box_open' |
  'cash_in_advance' | 'cash_on_delivery' | 'check' |
  'delivery_address' |
  'ideal' |
  'invoice_address' |
  'multiple_sources' |
  'paypal' |
  'ratepay' |
  'phone_block' |
  'test' |
  'webshop' |
  'webshop_bidagent' |
  'webshop_block' |
  'filter_reset'
);

export interface IJuweloFontIconProps {
  icon: Icon;
  error?: boolean;
  light?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const JuweloFontIcon: React.FC<IJuweloFontIconProps> = ({
  icon,
  error,
  light,
  style,
  className: customerClassName
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
  return (
    <i
      style={style || {}}
      className={`${className} ${customerClassName || ''}`}/>
  );
}

export default JuweloFontIcon;
