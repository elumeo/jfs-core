import React from 'react';
export declare type Props = {
    left?: React.ReactNode;
    middle?: React.ReactNode;
    right?: React.ReactNode;
    variant?: 'regular' | 'dense';
    position?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative';
    color?: 'primary' | 'secondary';
};
declare const AppToolbar: React.FC<Props>;
export default AppToolbar;
