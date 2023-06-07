import React from 'react';
export declare type ChildrenProps = {
    locale: string;
};
export declare type Props = {
    translations: Record<string, Record<string, string>>;
    children: (props: ChildrenProps) => React.ReactNode;
};
declare const International: React.FC<Props>;
export default International;
