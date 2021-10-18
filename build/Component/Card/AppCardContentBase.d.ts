import React from 'react';
import { CardContentProps } from '@material-ui/core/CardContent/CardContent';
export declare type AppCardContentBaseProps = CardContentProps & {
    fullHeight?: boolean;
    withSubtitle?: boolean;
    overrideCardTitleHeight?: string;
    className?: string;
};
declare const _default: React.MemoExoticComponent<({ children, ...rest }: AppCardContentBaseProps) => JSX.Element>;
export default _default;
