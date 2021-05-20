import React from 'react';
import { Props as HOCProps } from './HOC';
export declare type Props = HOCProps & {
    allowRobotLogin?: boolean;
    translations: {
        [language: string]: {
            [key: string]: string;
        };
    };
    packageJson: {
        [key: string]: string | object;
    };
    title?: string;
};
declare const App: React.FC<Props>;
export default App;
