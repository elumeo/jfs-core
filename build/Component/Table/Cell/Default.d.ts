import React from 'react';
import { Props as RootProps } from '../../Table/Cell/Root';
export type Props = RootProps & {
    isLoading?: boolean;
};
declare const Default: React.FC<Props>;
export default Default;
