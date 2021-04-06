import React from 'react';
import Wrapper, { Props } from '../Wrapper';

const FilterReset: React.FC<Props> = props => (
  <Wrapper {...props} titleAccess='filter_reset'>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(1.000000, 0.000000)" fill="currentcolor" fillRule="nonzero">
        <path d="M9,18 L13,18 L13,16 L9,16 L9,18 Z M0,2.1 L20.9,23 L22.2,21.7 L1.2,0.8 L0,2.1 Z M2,6 L2,8 L6,8 L6,6 L2,6 Z M9,6 L11,8 L20,8 L20,6 L9,6 Z M5,13 L11,13 L11,11 L5,11 L5,13 Z M16,13 L17,13 L17,11 L14,11 L16,13 Z"/>
      </g>
    </g>
  </Wrapper>
);

export default FilterReset;
