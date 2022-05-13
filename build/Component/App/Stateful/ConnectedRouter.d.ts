import React from 'react';
import { Location } from 'react-router';
import { History } from 'history';
declare type Props = {
    location: Location;
    history: History;
    children?: React.ReactNode;
};
declare const ConnectedRouter: React.FC<Props>;
export default ConnectedRouter;
