import React from 'react';
import './Initialized.scss';
declare namespace Initialized {
    type Props = {
        language?: string;
        messages?: {
            [language: string]: {
                [key: string]: string;
            };
        };
        appInitialized?: boolean;
    };
}
declare const Initialized: React.FC<Initialized.Props>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<Initialized.Props>, Pick<Initialized.Props, never> & Initialized.Props>;
export default _default;
