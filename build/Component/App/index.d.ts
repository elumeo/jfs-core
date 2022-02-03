import React from 'react';
import { Props as StatefulProps } from './Stateful';
import 'material-icons/iconfont/material-icons.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export declare type Props = StatefulProps & {
    allowRobotLogin?: boolean;
    packageJSON: Record<string, unknown>;
    translations: Record<string, Record<string, string>>;
    title?: string;
};
declare const App: React.FC<Props>;
export default App;
