import React from 'react';
import { ButtonProgressProps } from 'Component/Button/ButtonProgress';
export type Props = {
    onClick: ButtonProgressProps['onClick'];
    disabled: boolean;
};
declare const Submit: React.FC<Props>;
export default Submit;
