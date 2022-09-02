import React from 'react';
declare type ContentProps = {
    type: ContentType;
    children: ContentProps['type'] extends 'component' ? React.ReactNode : string;
    translate?: ContentProps['type'] extends 'component' ? never : boolean;
};
export declare type ContentType = 'text' | 'component';
declare const Content: React.FC<ContentProps>;
export default Content;
