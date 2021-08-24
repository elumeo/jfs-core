import React from 'react';
import { Props as HOCProps } from './HOC';
export declare type Props = HOCProps & {
    allowRobotLogin?: boolean;
    translations: Record<string, Record<string, string>>;
    packageJson: Record<string, unknown>;
    title?: string;
};
declare const App: React.FC<Props>;
export default App;
