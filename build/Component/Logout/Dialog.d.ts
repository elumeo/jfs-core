import React from 'react';
import { Props as TextProps } from './Text';
export type Props = {
    onLogout?: () => void;
    pending?: boolean;
    children?: TextProps['override'];
};
declare const Dialog: React.FC<Props>;
export default Dialog;
