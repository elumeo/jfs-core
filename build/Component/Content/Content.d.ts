import React from 'react';
import './_styles.scss';
declare namespace Content {
    type Props = {
        splitViewEnabled?: boolean;
    };
}
declare const Content: React.FC<Content.Props>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<Content.Props>, Pick<Content.Props, never> & Content.Props>;
export default _default;
