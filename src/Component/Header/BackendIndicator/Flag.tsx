import React from 'react';
import * as Icon from 'Component/Icon';
export type Country = 'de' | 'uk' | 'it';
export type Props = {
  country: Country;
};

const Flag: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  ({ country }, ref) => {
    const CountryIcon = Icon.Flag[
      country.toUpperCase() as Uppercase<Country>
    ] as React.FC;
    return (
      <div
        ref={ref}
        style={{
          width: 28,
          height: 28,
          position: 'relative',
          margin: 10,
        }}>
        {CountryIcon && <CountryIcon />}
      </div>
    );
  },
);

export default Flag;
