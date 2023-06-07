import React from 'react';
import { Props as StatefulProps } from './Stateful';
export type Props = StatefulProps & {
    allowRobotLogin?: boolean;
    packageJSON: Record<string, unknown>;
    translations: Record<string, Record<string, string>>;
    title?: string;
};
declare const App: React.FC<Props>;
export default App;
