import React from 'react';
export declare type Props = {
    value: string;
    onChange: (next: string) => void;
    onEnter: () => void;
    error: boolean;
};
declare const Password: React.FC<Props>;
export default Password;
