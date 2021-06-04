import React from 'react';
export declare type Props = {
    left?: JSX.Element;
    middle?: JSX.Element;
    right?: JSX.Element;
    variant?: 'regular' | 'dense';
    position?: 'static' | 'fixed' | 'absolute' | 'sticky' | 'relative';
};
declare const Toolbar: React.FC<Props>;
export default Toolbar;
