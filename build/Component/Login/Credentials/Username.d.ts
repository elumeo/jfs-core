import React from 'react';
export declare type Props = {
    value: string;
    onChange: (next: string) => void;
    error: boolean;
    onEnter: () => void;
};
declare const Username: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default Username;
