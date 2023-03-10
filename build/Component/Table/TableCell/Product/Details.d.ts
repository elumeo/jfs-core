import React from 'react';
export type DetailsProps = {
    id?: string;
    name?: string;
    onClick?: HTMLElement['click'];
};
declare const Details: React.FC<DetailsProps>;
export default Details;
