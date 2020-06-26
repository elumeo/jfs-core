import React from 'react';
import { initializeApp } from '../../Store/Action/AppAction';
export interface IAppProps {
    allowRobotLogin?: boolean;
    initializeApp?: typeof initializeApp;
    language?: string;
    location?: Location;
    store: any;
    translations: {
        [language: string]: {
            [key: string]: string;
        };
    };
    appInitialized?: boolean;
    packageJson: object;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<IAppProps>, Pick<IAppProps, never> & IAppProps>;
export default _default;
