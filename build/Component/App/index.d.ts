import React from 'react';
import { Props as StatefulProps } from './Stateful';
export declare type Props = StatefulProps & {
    allowRobotLogin?: boolean;
    translations: Record<string, Record<string, string>>;
    title?: string;
};
declare const App: React.FC<Props>;
export default App;
