import React from 'react';
import { Store } from 'redux';
import { Props as RouterProps } from './Router';
import Initializer from './Initializer';
import International from './International';
import Snackbar from './Snackbar';
import Initialized from './Initialized';
import Uninitialized from './Uninitialized';
export type Props = {
    store: Store;
    children: RouterProps['children'];
};
declare const Stateful: React.FC<Props> & {
    Snackbar: typeof Snackbar;
    Initializer: typeof Initializer;
    International: typeof International;
    Initialized: typeof Initialized;
    Uninitialized: typeof Uninitialized;
};
export default Stateful;
