import React from 'react';
import { ButtonProgressProps } from '../../Button/ButtonProgress';
export type Props = {
    pending: boolean;
    onClick: ButtonProgressProps['onClick'];
};
declare const Submit: React.FC<Props>;
export default Submit;
