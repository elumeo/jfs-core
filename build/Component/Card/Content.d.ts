import { FC } from 'react';
import { CardContentProps } from '@mui/material/CardContent/CardContent';
export declare type Props = CardContentProps & {
    fullHeight?: boolean;
    withSubtitle?: boolean;
    overrideCardTitleHeight?: string;
};
declare const Content: FC<Props>;
export default Content;
