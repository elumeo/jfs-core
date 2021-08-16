import React from 'react';
import { CardContentProps } from '@material-ui/core/CardContent/CardContent';
declare type AppCardContentProps = CardContentProps & {
    fullHeight?: boolean;
    withSubtitle?: boolean;
    overrideCardTitleHeight?: string;
};
declare const _default: React.MemoExoticComponent<(props: AppCardContentProps) => JSX.Element>;
export default _default;
