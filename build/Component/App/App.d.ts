import React from 'react';
import { initializeApp } from '../../Store/Action/AppAction';
declare namespace App {
    type Props = {
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
    };
}
declare const App: React.FC<App.Props>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<App.Props>, Pick<App.Props, never> & App.Props>;
export default _default;
