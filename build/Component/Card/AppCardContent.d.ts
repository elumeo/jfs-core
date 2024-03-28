import React from 'react';
import { CardContentProps } from '@material-ui/core/CardContent/CardContent';
export type AppCardContentBaseProps = CardContentProps & {
    fullHeight?: boolean;
    withSubtitle?: boolean;
    overrideCardTitleHeight?: string;
    className?: string;
};
declare const _default: React.MemoExoticComponent<({ children, fullHeight, withSubtitle, overrideCardTitleHeight, ...rest }: AppCardContentBaseProps) => React.JSX.Element>;
export default _default;
