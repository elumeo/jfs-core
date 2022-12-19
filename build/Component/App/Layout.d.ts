import React from 'react';
export type Props = {
    children?: JSX.Element | JSX.Element[];
    navigation?: JSX.Element;
    spacing?: {
        width: number;
        height: number;
    };
    className?: string;
};
declare const _default: React.MemoExoticComponent<({ children, className, navigation, spacing }: Props) => JSX.Element>;
export default _default;
