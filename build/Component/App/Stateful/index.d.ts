import React from 'react';
import { Store } from 'redux';
import Initializer from './Initializer';
import International from './International';
import Snackbar from './Snackbar';
import Initialized from './Initialized';
import Uninitialized from './Uninitialized';
export declare type Props = React.PropsWithChildren<{
    store: Store;
}>;
declare const Stateful: React.FC<Props> & {
    Snackbar: typeof Snackbar;
    Initializer: typeof Initializer;
    International: typeof International;
    Initialized: typeof Initialized;
    Uninitialized: typeof Uninitialized;
};
export default Stateful;
