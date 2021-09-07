import React from 'react';
import { Store } from 'redux';
export declare type Props = {
    store: Store;
    translations: Record<string, Record<string, string>>;
    packageJSON: Record<string, unknown>;
    allowRobotLogin?: boolean;
};
declare const Stateful: React.FC<Props>;
export default Stateful;
