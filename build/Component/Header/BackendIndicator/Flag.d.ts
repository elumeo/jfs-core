import React from 'react';
export type Country = 'de' | 'uk' | 'it';
export type Props = {
    country: Country;
};
declare const Flag: React.FC<Props>;
export default Flag;
