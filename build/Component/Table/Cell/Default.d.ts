import React from 'react';
import { Props as RootProps } from 'Component/Table/Cell/Root';
export declare enum ContentEllipseMode {
    None = "none",
    Normal = "normal",
    Lines = "lines"
}
export declare type Props = RootProps & {
    isLoading?: boolean;
    contentEllipseMode?: ContentEllipseMode;
    contentEllipseLines?: number;
    overflow?: 'hidden' | 'visible';
};
declare const Default: React.FC<Props>;
export default Default;
