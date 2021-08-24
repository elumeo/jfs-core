import React from 'react';
export declare type Props = {
    allowRobotLogin: boolean;
    translations: Record<string, Record<string, string>>;
    packageJson: Record<string, unknown>;
};
declare const Loader: React.FC<Props>;
export default Loader;
