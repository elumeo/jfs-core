import React from 'react';
export declare type Props = {
    allowRobotLogin: boolean;
    packageJSON: Record<string, unknown>;
    translations: Record<string, Record<string, string>>;
};
declare const Initialized: React.FC<Props>;
export default Initialized;
