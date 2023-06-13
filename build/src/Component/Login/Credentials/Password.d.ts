import React from 'react';
export type Props = {
    value: string;
    onChange: (next: string) => void;
    onEnter: () => void;
};
declare const Password: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default Password;
