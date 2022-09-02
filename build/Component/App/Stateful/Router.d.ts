import React from 'react';
import { ReduxRouterProps } from '@lagunovsky/redux-react-router';
export declare type Props = Omit<ReduxRouterProps, 'history'>;
declare const Router: React.FC<Props>;
export default Router;
