import React from 'react';
export declare type Props = {
    allowRobotLogin: boolean;
    translations: {
        [language: string]: {
            [key: string]: string;
        };
    };
    packageJson: object;
};
declare const Loader: React.FC<Props>;
export default Loader;
