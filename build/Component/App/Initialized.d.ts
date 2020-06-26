import React from 'react';
import './Initialized.scss';
export interface IInitializedProps {
    language?: string;
    messages?: {
        [language: string]: {
            [key: string]: string;
        };
    };
    appInitialized?: boolean;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<IInitializedProps>, Pick<IInitializedProps, never> & IInitializedProps>;
export default _default;
