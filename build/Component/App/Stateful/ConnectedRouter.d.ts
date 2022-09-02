import React from 'react';
import { History } from 'history';
declare type Props = {
    history: History;
    children?: React.ReactNode;
};
declare const ConnectedRouter: React.FC<Props>;
export default ConnectedRouter;
