import React from 'react';
import { Store } from 'redux';
export declare type Props = {
    store: Store;
    allowRobotLogin?: boolean;
    translations: {
        [language: string]: {
            [key: string]: string;
        };
    };
    packageJson: object;
};
declare const App: React.FC<Props>;
export default App;
