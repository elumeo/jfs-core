import React from 'react';
export declare type Credentials = {
    username: string;
    password: string;
};
export declare type Props = {
    value: Credentials;
    onChange: (next: Credentials) => void;
    onSubmit: () => void;
    error: boolean;
};
declare const LoginCredentials: React.FC<Props>;
export default LoginCredentials;
