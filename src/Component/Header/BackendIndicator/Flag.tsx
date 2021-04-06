import React from 'react';
import FlagURL from './FlagURL.json';

export type Country = 'de' | 'uk' | 'it';

export type Props = {
  country: Country;
};

const Flag: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  ({ country }, ref) => {
    const url = FlagURL[country];
    return (
      <div ref={ref} style={{
        width: 28,
        height: 28,
        position: 'relative',
        margin: 10,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${url}')`
      }}/>
    );
  }
)

export default Flag;
