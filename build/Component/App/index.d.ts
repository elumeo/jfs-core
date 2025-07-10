import React from 'react';
import { Props as StatelessProps } from './Stateless';
import { Props as StatefulProps } from './Stateful';
export type Props = StatefulProps & {
    packageJSON: Record<string, unknown>;
    translations: Record<string, Record<string, string>>;
    onTranslationError?: StatelessProps['onError'];
    title?: string;
};
declare const App: React.FC<Props>;
export default App;
