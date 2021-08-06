import React from 'react';
import Wrapper, { Props } from '../Wrapper';

const Test: React.FC<Props> = props => (
  <Wrapper {...props}>
    <title>test</title>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <circle fill='currentcolor' cx='16.5' cy='15.5' r='10.5' />
    </g>
  </Wrapper>
);

export default Test;
