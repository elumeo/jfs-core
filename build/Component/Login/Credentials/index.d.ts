import React from 'react';
import * as Type from '../../../Types/Login';
export declare type Props = {
    value: Type.Credentials;
    onChange: (next: Type.Credentials) => void;
    onSubmit: () => void;
};
declare const Credentials: React.FC<Props>;
export default Credentials;
