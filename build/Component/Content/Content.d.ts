import React from 'react';
import './Content.scss';
export interface IContentProps {
    splitViewEnabled?: boolean;
}
declare class Content extends React.Component<IContentProps> {
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Content, Pick<React.ClassAttributes<Content> & IContentProps, "key" | "ref"> & IContentProps>;
export default _default;
