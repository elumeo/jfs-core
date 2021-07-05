import React from 'react';
export declare type Props = {
    allowRobotLogin: boolean;
    translations: {
        [language: string]: {
            [key: string]: string;
        };
    };
    packageJson: any;
};
declare const Loader: React.FC<Props>;
export default Loader;
